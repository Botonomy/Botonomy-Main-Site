/**
 * prerender.mjs — Static pre-render for Botonomy Main Site
 *
 * Runs AFTER vite build && vite build --ssr.
 * For each route: renders to HTML string, injects into dist/index.html template,
 * writes to dist/<route>/index.html.
 *
 * Effect: browsers receive full HTML on first byte — no JS required for first paint.
 * React then hydrates on top of the pre-rendered markup (hydrateRoot in main.jsx).
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// All routes that should be pre-rendered as static HTML files
const routes = [
    '/',
    '/systems/seo-audit',
    '/systems/generative-content',
    '/systems/crm-automation',
    '/systems/social-media',
    '/systems/rag-systems',
    '/contact',
]

// Load the SSR bundle produced by `vite build --ssr`
const { render } = await import('./dist/server/entry-server.js')

// Read the client build's index.html as the injection template
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

for (const url of routes) {
    const { html } = render(url)

    // react-helmet-async v3 renders <Helmet> children inline during SSR
    // (rather than collecting them into helmetContext). Extract head-only
    // tags from the rendered HTML and hoist them into <head>.
    const headOnlyTags = []
    const headTagRe = /<(title|meta|link|base)([^>]*?)(\/>|>(?:.*?<\/\1>)?)/gs
    const cleanHtml = html.replace(headTagRe, (match) => {
        headOnlyTags.push(match)
        return ''
    })
    const injectedHead = headOnlyTags.join('\n    ')

    const fullHtml = template
        // Replace generic title with page-specific head tags
        .replace('<title>Botonomy AI</title>', injectedHead || '<title>Botonomy AI</title>')
        // Inject cleaned pre-rendered React tree into the root div
        .replace('<div id="root"></div>', `<div id="root">${cleanHtml}</div>`)

    // / → dist/index.html | /systems/seo-audit → dist/systems/seo-audit/index.html
    const filePath = url === '/'
        ? toAbsolute('dist/index.html')
        : toAbsolute(`dist${url}/index.html`)

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, fullHtml)
    console.log(`  ✓ ${url}  →  ${path.relative(__dirname, filePath)}`)
}

// Remove the SSR bundle — it's a Node.js artifact, not needed for deployment
fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true })
console.log('\nPre-render complete. dist/server cleaned up.')

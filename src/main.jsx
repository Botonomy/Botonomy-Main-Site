import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrateRoot, createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  render() {
    if (this.state.hasError) {
      return <div className="p-8 bg-red-900 text-white font-mono break-words"><h1 className="text-2xl font-bold mb-4">App Crashed</h1><pre className="whitespace-pre-wrap">{this.state.error.stack}</pre></div>;
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
)

if (rootEl.innerHTML.trim()) {
  // SSG pre-rendered HTML present — hydrate without re-rendering
  // React 18 keeps server HTML visible while lazy chunks load (no flash)
  hydrateRoot(rootEl, app)
} else {
  // Dev mode or fallback — full client render
  createRoot(rootEl).render(app)
}

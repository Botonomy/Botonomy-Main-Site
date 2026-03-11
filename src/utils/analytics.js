/**
 * Botonomy Analytics — dataLayer event helper
 *
 * All events go through GTM (GTM-MDK7CHHT) → GA4.
 * To add a new event: call track('event_name', { param: value })
 *
 * Event taxonomy:
 *   AWARENESS   → page_view (auto), utm_session_start
 *   ENGAGEMENT  → section_view, scroll_depth, nav_click
 *   INTEREST    → cta_click, pricing_plan_view
 *   INTENT      → booking_intent, form_start, topic_select
 *   CONVERSION  → form_submit, booking_click
 */

/**
 * Push any event to GTM dataLayer.
 * @param {string} event_name
 * @param {Object} params
 */
export const track = (event_name, params = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: event_name, ...params });
};

// ─── Convenience wrappers ────────────────────────────────────────────────────

/** Fired when a CTA button is clicked. */
export const trackCTA = (location, cta_type, extra = {}) =>
  track('cta_click', { cta_location: location, cta_type, ...extra });

/** Fired when a section scrolls into the viewport (once per session per section). */
export const trackSectionView = (section) =>
  track('section_view', { section_name: section });

/** Fired at 25 / 50 / 75 / 90 scroll depth thresholds. */
export const trackScrollDepth = (depth_pct) =>
  track('scroll_depth', { depth_pct });

/** Fired when any nav link is clicked. */
export const trackNavClick = (destination, nav_type = 'main') =>
  track('nav_click', { nav_destination: destination, nav_type });

/** Fired on the first interaction with any CTA linking to Google Calendar. */
export const trackBookingIntent = (location) =>
  track('booking_intent', { intent_location: location });

/** Fired when a user focuses the first field of a form. */
export const trackFormStart = (form_name) =>
  track('form_start', { form_name });

/** Fired on successful form submission. */
export const trackFormSubmit = (form_name, topic = '') =>
  track('form_submit', { form_name, topic, success: true });

/** Fired on form submission error. */
export const trackFormError = (form_name, error_type = 'unknown') =>
  track('form_error', { form_name, error_type, success: false });

/** Fired when a pricing card scrolls into view. */
export const trackPricingView = (plan_name) =>
  track('pricing_plan_view', { plan_name });

/** Fired when a pricing CTA is clicked. */
export const trackPricingCTA = (plan_name) =>
  track('cta_click', { cta_location: 'pricing', cta_type: 'get_started', plan: plan_name });

// ─── UTM session capture ─────────────────────────────────────────────────────

/**
 * On first page load, if UTM params are present, fire utm_session_start
 * so GA4 and GTM can attribute the session to the paid campaign.
 * Call this once from App.jsx on mount.
 */
export const captureUTMSession = () => {
  const params = new URLSearchParams(window.location.search);
  const source   = params.get('utm_source');
  const medium   = params.get('utm_medium');
  const campaign = params.get('utm_campaign');
  const content  = params.get('utm_content');
  const term     = params.get('utm_term');

  if (source || medium || campaign) {
    track('utm_session_start', {
      utm_source:   source   || '',
      utm_medium:   medium   || '',
      utm_campaign: campaign || '',
      utm_content:  content  || '',
      utm_term:     term     || '',
    });
  }
};

// ─── Scroll depth tracker ────────────────────────────────────────────────────

/**
 * Attach a one-time scroll depth tracker.
 * Fires trackScrollDepth at 25, 50, 75, 90% thresholds.
 * Call once from App.jsx on mount.
 */
export const initScrollDepthTracking = () => {
  const thresholds = [25, 50, 75, 90];
  const fired = new Set();

  const onScroll = () => {
    const scrolled = window.scrollY + window.innerHeight;
    const total    = document.documentElement.scrollHeight;
    const pct      = Math.round((scrolled / total) * 100);

    for (const t of thresholds) {
      if (pct >= t && !fired.has(t)) {
        fired.add(t);
        trackScrollDepth(t);
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
};

// ─── Section visibility tracker ─────────────────────────────────────────────

/**
 * Watch a ref and fire section_view once when it enters the viewport.
 * Usage in component: useSectionTracking(ref, 'hero')
 */
export const useSectionTracking = (ref, section_name) => {
  // Imported in components alongside useEffect
  // The actual hook is defined here as a factory to avoid importing React
  // — components call this inside their own useEffect
  if (!ref?.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        trackSectionView(section_name);
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  observer.observe(ref.current);
  return () => observer.disconnect();
};

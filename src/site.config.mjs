// ─────────────────────────────────────────────────────────────
// PER-PRODUCT CONFIG — each of the 5 sites customizes ONLY this file.
// Everything else (SEO head, sitemap, GA4, JSON-LD) reads from here.
// ─────────────────────────────────────────────────────────────
export const site = {
  // Identity
  name: 'LLM Eval & Trace',
  organization: 'Sreenivas Sadhu',
  tagline: 'Ship AI features with confidence. Trace every call, catch every regression.',

  // Hosting (GitHub Pages project site)
  domain: 'https://sreenivas-sadhu-prabhakara.github.io',
  base: '/llm-eval-trace', // MUST match the repo name, e.g. '/llm-eval-trace'

  // SEO
  title: 'LLM Eval & Trace — Observability & Evals for AI Apps',
  description:
    'LLM Eval & Trace logs every model call, traces multi-step agents, and runs regression evals when you change a prompt — so you never ship a silent quality drop.',
  keywords: [
    'LLM observability',
    'prompt evaluation',
    'LLM tracing',
    'AI eval tool',
    'Claude observability',
    'agent tracing',
  ],
  ogImage: '/og.png', // 1200x630, lives in /public
  twitter: '', // e.g. '@handle' (optional)

  // Analytics — real GA4 Measurement ID goes here (or leave placeholder)
  ga4Id: 'G-XXXXXXXXXX',

  // Structured data
  jsonLdType: 'SoftwareApplication', // or 'WebApplication'
  appCategory: 'DeveloperApplication',
  price: '0', // '0' => free; used in Offer schema
};

// Absolute canonical URL for the homepage (used in <head> + JSON-LD)
export const canonicalRoot = `${site.domain}${site.base}`;

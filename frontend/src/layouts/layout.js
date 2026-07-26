/**
 * layout.js
 *
 * Single source of truth for the spacing/width/surface system shared by
 * the Navbar and every landing-page section.
 */

export const CONTAINER = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';
export const SECTION_Y = 'py-16 sm:py-20 lg:py-24';
export const CARD = 'rounded-2xl border border-[#334155] bg-[#1E293B] shadow-lg overflow-hidden';

// The recurring "nested tile inside a card" surface — sensor tiles, flow
// nodes, chart/alert/status rows.
export const TILE = 'rounded-xl border border-[#334155] bg-[#0F172A] shadow-md';

export const NAVBAR_HEIGHT = 'h-20'; // 80px
export const NAVBAR_OFFSET = 'pt-20'; // 80px — must match NAVBAR_HEIGHT

// Alternating section backgrounds for smooth visual flow.
export const BG_PRIMARY = 'bg-[#0F172A]';
export const BG_SECONDARY = 'bg-[#111C31]';

// Visible keyboard-focus ring.
export const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]';
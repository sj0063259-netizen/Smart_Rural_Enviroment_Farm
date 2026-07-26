/**
 * Navbar.jsx
 *
 * Purpose
 * -------
 * Primary site navigation for the Smart Rural Environment & Farm Safety
 * Platform. Renders the brand/logo, top-level page links, a live system
 * status indicator, and a call-to-action button that opens the dashboard.
 *
 * Responsibilities
 * ----------------
 * - Stay visible while scrolling (sticky) and switch from a transparent
 *   state to a blurred, bordered state once the page scrolls past the hero.
 * - Highlight the currently active route.
 * - Provide a fully responsive mobile menu (hamburger -> slide-down panel).
 * - Contain zero business logic — it only renders links and local UI state
 *   (menu open/closed, scrolled/not-scrolled). It never talks to the
 *   backend or hardware directly, per ARCHITECTURE.md.
 *
 * How it connects to the rest of the project
 * -------------------------------------------
 * - Rendered once inside the root layout (e.g. `AppLayout` /
 *   `MainLayout`) so it appears above every page.
 * - Uses `react-router-dom` for client-side navigation between the
 *   Landing, Dashboard, Analytics, Documentation, and Team pages defined
 *   in PROJECT_CONTEXT.md.
 * - Colors, spacing, radii, and animation timing come directly from
 *   DESIGN_SYSTEM.md (dark theme, 200ms transitions, 12px button radius).
 */

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Sprout, Menu, X, Radio, LayoutDashboard } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Analytics', path: '/analytics' },
  { name: 'Documentation', path: '/docs' },
  { name: 'Team', path: '/team' },
];

const SCROLL_THRESHOLD = 24;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position so the bar can switch from transparent to a
  // blurred / bordered surface once the user leaves the hero area.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0F172A]/80 backdrop-blur-md border-b border-[#334155]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo — left */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 shrink-0"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#16A34A]">
            <Sprout className="h-5 w-5 text-[#F8FAFC]" strokeWidth={2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-[#F8FAFC]">
              FarmSafe
            </span>
            <span className="hidden text-xs text-[#94A3B8] sm:block">
              Smart Rural Monitoring
            </span>
          </span>
        </NavLink>

        {/* Links — right (desktop) */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#16A34A]'
                    : 'text-[#CBD5E1] hover:text-[#F8FAFC]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#16A34A]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Status + CTA — right (desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-[#334155] px-3 py-1.5">
            <Radio className="h-3.5 w-3.5 text-[#22C55E]" strokeWidth={2.5} />
            <span className="text-xs font-medium text-[#CBD5E1]">
              System Online
            </span>
          </div>

          <NavLink
            to="/dashboard"
            className="flex items-center gap-2 rounded-xl bg-[#16A34A] px-4 py-2 text-sm font-semibold text-[#F8FAFC] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <LayoutDashboard className="h-4 w-4" strokeWidth={2.5} />
            Open Dashboard
          </NavLink>
        </div>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-[#F8FAFC] transition-colors duration-200 hover:bg-[#1E293B] md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={2} />
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[#334155] bg-[#0F172A]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-[#1E293B] text-[#16A34A]'
                        : 'text-[#CBD5E1] hover:bg-[#1E293B] hover:text-[#F8FAFC]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="mt-2 flex items-center gap-2 px-4 py-2">
                <Radio className="h-3.5 w-3.5 text-[#22C55E]" strokeWidth={2.5} />
                <span className="text-xs font-medium text-[#CBD5E1]">
                  System Online
                </span>
              </div>

              <NavLink
                to="/dashboard"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-4 py-3 text-sm font-semibold text-[#F8FAFC] transition-transform duration-200 active:scale-[0.98]"
              >
                <LayoutDashboard className="h-4 w-4" strokeWidth={2.5} />
                Open Dashboard
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
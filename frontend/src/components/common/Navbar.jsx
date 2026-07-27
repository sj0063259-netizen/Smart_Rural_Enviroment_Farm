/**
 * Navbar.jsx
 *
 * Premium Navbar V3
 * Smart Rural Environment & Farm Safety Platform
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sprout,
  Menu,
  X,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";

import {
  CONTAINER,
  NAVBAR_HEIGHT,
  FOCUS_RING,
} from "../../layouts/layout";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Platform", href: "#platform" },
  { name: "Technology", href: "#technology" },
  { name: "Team", href: "#team" },
];

const linkClass = `
relative
rounded-lg
px-2
py-2
text-sm
font-medium
transition-all
duration-300
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = ["home", "platform", "technology", "team"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-[#0F172A]/70 backdrop-blur-xl shadow-lg shadow-black/10">
      <nav
        className={`${CONTAINER} ${NAVBAR_HEIGHT} flex items-center justify-between`}
      >
        {/* Logo */}

        <a
          href="#home"
          onClick={closeMenu}
          className={`flex items-center gap-3 ${FOCUS_RING}`}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 shadow-lg shadow-green-500/20">
            <Sprout className="h-6 w-6 text-white" />
          </div>

          <div className="leading-tight">
            <h2 className="font-bold text-white">
              FarmSafe
            </h2>

            <p className="text-xs text-slate-400">
              Smart Rural Platform
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.href}
                href={item.href}
                className={`${linkClass} ${FOCUS_RING} ${
                  active
                    ? "text-green-400"
                    : "text-slate-300 hover:text-green-400"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-green-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Dashboard Button */}

        <div className="hidden lg:flex items-center">
          <Link
            to="/dashboard"
            className="group inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/30"
          >
            <LayoutDashboard className="h-4 w-4" />

            Launch Dashboard

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Button */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`lg:hidden rounded-xl p-2 text-white ${FOCUS_RING}`}
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-slate-800 bg-[#0F172A]/95 backdrop-blur-xl lg:hidden">
          <div className={`${CONTAINER} flex flex-col gap-2 py-5`}>
            {NAV_ITEMS.map((item) => {
              const active =
                activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 transition-all duration-300 ${
                    active
                      ? "bg-green-500/10 text-green-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-green-400"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

            <Link
              to="/dashboard"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-500"
            >
              <LayoutDashboard className="h-4 w-4" />

              Launch Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
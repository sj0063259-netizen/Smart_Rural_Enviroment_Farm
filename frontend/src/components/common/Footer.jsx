/**
 * Footer.jsx
 */

import { GitBranch, FileText } from 'lucide-react';

import { CONTAINER, BG_PRIMARY, FOCUS_RING } from "../../layouts/layout";

const REPO_URL = 'https://github.com/sj0063259-netizen/Smart_Rural_Enviroment_Farm';

const FOOTER_LINKS = [
  { label: 'GitHub', href: REPO_URL, icon: GitBranch },
  { label: 'Documentation', href: `${REPO_URL}/tree/main/docs`, icon: FileText },
];

const FOOTER_LINK_CLASS = `flex items-center gap-2 rounded-md text-sm text-[#CBD5E1] transition-colors duration-200 hover:text-[#F8FAFC] ${FOCUS_RING} focus-visible:ring-[#334155]`;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t border-[#334155] ${BG_PRIMARY} py-12`}>
      <div className={`${CONTAINER} flex flex-col items-center gap-6 sm:flex-row sm:justify-between`}>
        <p className="text-center text-sm text-[#94A3B8] sm:text-left">
          Smart Rural Environment &amp; Farm Safety Platform
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {FOOTER_LINKS.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className={FOOTER_LINK_CLASS}>
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className={CONTAINER}>
        <p className="mt-8 border-t border-[#334155] pt-6 text-center text-xs text-[#94A3B8]">
          © {year} Smart Rural Environment &amp; Farm Safety Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
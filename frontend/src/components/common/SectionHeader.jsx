/**
 * SectionHeader.jsx
 *
 * Reusable section heading component
 */

function SectionHeader({
  eyebrow,
  headingId,
  title,
  subtitle,
}) {
  return (
    <div className="mx-auto w-full max-w-2xl text-center">
      {eyebrow && (
        <span className="inline-block rounded-full border border-[#334155] px-4 py-1.5 text-xs font-medium text-[#CBD5E1]">
          {eyebrow}
        </span>
      )}

      <h2
        id={headingId}
        className="mt-4 text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl"
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
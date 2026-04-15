interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-soft-green">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-bold text-maroon md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm text-muted md:text-base">{subtitle}</p> : null}
    </div>
  );
}

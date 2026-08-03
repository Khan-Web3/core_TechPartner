import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  crumbs?: { label: string; href?: string }[];
};

export default function PageBanner({
  title,
  subtitle = "Core Tech Partner",
  crumbs = [],
}: Props) {
  return (
    <section className="page-banner">
      <div className="container-x relative z-10">
        <p className="text-white/80 text-sm font-semibold tracking-[0.16em] uppercase mb-3">
          {subtitle}
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          {title}
        </h1>
        {crumbs.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-2">
                <span>/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">{c.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

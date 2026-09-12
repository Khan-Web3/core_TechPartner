// Core Tech Partner site file
import Link from "next/link";
import { company, socialLinks } from "@/lib/data";
import Logo from "@/app/components/Logo";

const nav = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

const services = [
  "Web Development",
  "Mobile Apps",
  "FMCG & Retail Systems",
  "UI / UX Design",
  "Cloud & Custom Software",
];

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: (
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3z" />
  ),
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.3" cy="6.7" r="1.2" />
    </>
  ),
  X: <path d="M4 3h4.5l4 5.7L17.4 3H20l-6.2 7.1L20.5 21H16l-4.4-6.1L6.4 21H4l6.5-7.5L4 3z" />,
  LinkedIn: (
    <path d="M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3V9zm6 0h3v1.7c.6-1 1.8-2 3.6-2C19 8.7 21 10.5 21 14v7h-3v-6.2c0-1.7-.6-2.8-2.1-2.8-1.2 0-1.9.8-2.2 1.6-.1.3-.1.6-.1 1V21H9V9z" />
  ),
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* background: grid lines + glows */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,112,184,0.4),transparent_45%),radial-gradient(circle_at_100%_100%,rgba(0,128,200,0.18),transparent_40%)]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,112,184,0.9),transparent)]" />
      <span className="pointer-events-none absolute left-[18%] top-0 h-40 w-px bg-[linear-gradient(to_bottom,rgba(0,112,184,0.8),transparent)]" />
      <span className="pointer-events-none absolute right-[22%] bottom-0 h-56 w-px bg-[linear-gradient(to_top,rgba(0,112,184,0.6),transparent)]" />

      <div className="container-x relative">
        {/* CTA band */}
        <div className="py-10 md:py-12 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="section-label">Let’s work together</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08]">
              Have an idea worth building?
              <br />
              <span className="text-white/50">Let’s make it real.</span>
            </h2>
          </div>
          <Link href="/contact" className="btn-primary !px-8 shrink-0 self-start md:self-auto">
            Start a project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>

        {/* main columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-10 md:py-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-5" aria-label="Core Tech Partner home">
              <Logo inverted className="h-14" />
            </Link>
            <p className="text-white/55 leading-relaxed max-w-md mb-8">
              A software studio in Islamabad building web apps, mobile products,
              and enterprise systems that hold up in production.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  title={s.label}
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-white/70 hover:text-white hover:bg-brand hover:border-brand transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                    {socialIcons[s.label]}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/45 mb-5">Navigate</h4>
            <ul className="space-y-3 text-sm">
              {nav.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/75 hover:text-brand transition-colors inline-flex items-center gap-2 group">
                    <span className="h-px w-0 bg-brand transition-all group-hover:w-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/45 mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-white/75">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/45 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${company.email}`} className="text-white/75 hover:text-brand transition-colors">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.support}`} className="text-white/75 hover:text-brand transition-colors">
                  {company.support}
                </a>
              </li>
              <li className="text-white/55 leading-relaxed pt-1">{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="py-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Core Tech Partner. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

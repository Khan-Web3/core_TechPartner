import Link from "next/link";
import PageBanner from "@/app/components/PageBanner";
import { company } from "@/lib/data";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  after?: string[];
};

type Props = {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalPage({ title, intro, updated, sections }: Props) {
  return (
    <>
      <PageBanner title={title} subtitle="Legal" crumbs={[{ label: title }]} />

      <section className="section-pad bg-paper">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky table of contents */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-[16px] border border-line bg-background p-6">
                <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-muted mb-4">
                  On this page
                </p>
                <ol className="space-y-2.5 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex gap-3 text-ink/70 hover:text-brand transition-colors"
                      >
                        <span className="font-display text-brand/60 tabular-nums group-hover:text-brand">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{s.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-[16px] bg-ink text-white p-6">
                <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/45 mb-2">
                  Last updated
                </p>
                <p className="font-display font-bold mb-5">{updated}</p>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Questions about this document? We are happy to help.
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm font-semibold text-brand hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <article className="lg:col-span-8 xl:col-span-9 max-w-3xl">
            <p className="text-lg md:text-xl text-ink/80 leading-relaxed mb-12 pb-12 border-b border-line">
              {intro}
            </p>

            <div className="space-y-12">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-display text-brand/50 text-sm font-bold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl md:text-[1.7rem] font-bold text-ink leading-snug">
                      {s.heading}
                    </h2>
                  </div>
                  <div className="pl-0 md:pl-10 space-y-4 text-muted leading-relaxed">
                    {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                    {s.bullets && (
                      <ul className="space-y-2.5">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.after?.map((p) => <p key={p}>{p}</p>)}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 rounded-[18px] border border-line bg-background p-7 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="font-display text-xl font-bold text-ink mb-1">
                  Still have questions?
                </p>
                <p className="text-muted text-sm">
                  Reach out and a member of our team will get back to you.
                </p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                Contact us
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { siteConfig } from "../../data/siteConfig";

export function Contact() {
  const { contact } = siteConfig;
  const hasResume = Boolean(contact.resumeLink);

  return (
    <Section id="contact" bg="soft">
      <SectionTitle index="06" eyebrow="Contact" title="Let's talk." />

      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="font-serif text-2xl md:text-3xl text-ink leading-snug tracking-tightish max-w-prose">
              {contact.ctaEn}
            </p>
            <p className="mt-5 text-[14px] text-muted leading-relaxed max-w-prose">
              {contact.ctaZh}
            </p>

            <div className="mt-10 flex flex-col gap-y-6 max-w-md">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="group inline-flex items-center gap-2 border border-ink-soft text-ink hover:border-ink hover:bg-ink hover:text-canvas transition-colors duration-300 px-5 py-2.5 text-[12px] tracking-widish uppercase font-sans rounded-sm"
                >
                  <span>Email me</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>

                {contact.demoLink && (
                  <a
                    href={contact.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[12px] tracking-widish uppercase text-ink-soft hover:text-accent transition-colors font-sans border-b border-line hover:border-accent pb-1"
                  >
                    <span>Try Live Demo</span>
                    <span className="transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                )}
              </div>

              {/* Resume on its own row to prevent any horizontal text collision */}
              <div className="flex flex-col items-start gap-1.5">
                {hasResume ? (
                  <a
                    href={contact.resumeLink ?? undefined}
                    className="group inline-flex items-center gap-2 text-[12px] tracking-widish uppercase text-ink-soft hover:text-accent transition-colors font-sans border-b border-line hover:border-accent pb-1"
                  >
                    <span>Download Resume</span>
                    <span>↓</span>
                  </a>
                ) : (
                  <>
                    <span
                      className="inline-flex items-center gap-2 text-[12px] tracking-widish uppercase text-muted-soft font-sans border-b border-line-soft pb-1 cursor-not-allowed"
                      aria-disabled="true"
                    >
                      <span>Download Resume</span>
                      <span>↓</span>
                    </span>
                    <span className="font-mono text-[9.5px] tracking-widish text-muted-soft uppercase italic mt-1">
                      Resume PDF — coming soon
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-line rounded-sm p-7 bg-card">
              <div className="font-mono text-[10px] tracking-widish text-muted uppercase mb-6">
                Channels
              </div>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[11px] text-muted">email</span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[13px] text-ink-soft hover:text-accent transition-colors break-all text-right"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[11px] text-muted">github</span>
                  <span className="font-mono text-[10px] tracking-widish text-muted-soft uppercase italic">
                    coming soon
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[11px] text-muted">
                    linkedin
                  </span>
                  <span className="font-mono text-[10px] tracking-widish text-muted-soft uppercase italic">
                    coming soon
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[11px] text-muted">demo</span>
                  <a
                    href={contact.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-ink-soft hover:text-accent transition-colors max-w-[200px] truncate"
                  >
                    yaobai-zhi
                  </a>
                </div>
                <div className="flex items-baseline justify-between gap-4 pt-4 border-t border-line-soft">
                  <span className="font-mono text-[11px] text-muted">
                    status
                  </span>
                  <span className="text-[13px] text-accent">open to work</span>
                </div>
              </div>
            </div>

            {/* 收尾签名,弱化的 editorial 标记 */}
            <div className="mt-8 flex items-center gap-3 px-1">
              <span className="h-px flex-1 bg-line-soft" />
              <span className="font-serif italic text-[13px] text-muted">
                — end of page
              </span>
              <span className="h-px flex-1 bg-line-soft" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

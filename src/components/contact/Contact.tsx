import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrollReveal } from "../ui/ScrollReveal";
import { siteConfig } from "../../data/siteConfig";
import { assetUrl } from "../../lib/assetUrl";
import { useLang, pickLang } from "../../i18n/LangContext";

export function Contact() {
  const { contact } = siteConfig;
  const { lang, t } = useLang();
  const resumeHref = assetUrl(contact.resumeLink);
  const hasResume = Boolean(resumeHref);
  const ctaPrimary = lang === "zh" ? contact.ctaZh : contact.ctaEn;

  return (
    <Section id="contact" bg="soft">
      <SectionTitle
        index="06"
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
      />

      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="font-serif text-2xl md:text-3xl text-ink leading-snug tracking-tightish max-w-prose">
              {ctaPrimary}
            </p>

            <div className="mt-10 flex flex-col gap-y-6 max-w-md">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="group inline-flex items-center gap-2 border border-ink-soft text-ink hover:border-ink hover:bg-ink hover:text-canvas transition-colors duration-300 px-5 py-2.5 text-[12px] tracking-widish uppercase font-sans rounded-sm"
                >
                  <span>{t("contact.emailMe")}</span>
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
                    <span>{t("contact.tryLiveDemo")}</span>
                    <span className="transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                )}
              </div>

              <div className="flex flex-col items-start gap-1.5">
                {hasResume ? (
                  <a
                    href={resumeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[12px] tracking-widish uppercase text-ink-soft hover:text-accent transition-colors font-sans border-b border-line hover:border-accent pb-1"
                  >
                    <span>{t("contact.downloadResume")}</span>
                    <span>↗</span>
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 text-[12px] tracking-widish uppercase text-muted-soft font-sans border-b border-line-soft pb-1 cursor-not-allowed"
                    aria-disabled="true"
                  >
                    <span>{t("contact.downloadResume")}</span>
                    <span>↗</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-line rounded-sm p-7 bg-card">
              <div className="font-mono text-[10px] tracking-widish text-muted uppercase mb-6">
                {t("contact.channelsLabel")}
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
                  {contact.github && (
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-ink-soft hover:text-accent transition-colors max-w-[200px] truncate"
                    >
                      howard-hou-zhenpu
                    </a>
                  )}
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
                {contact.education && (
                  <div className="pt-4 border-t border-line-soft">
                    <div className="font-mono text-[10px] tracking-widish text-muted uppercase mb-3">
                      {t("contact.educationLabel")}
                    </div>
                    <div className="space-y-2.5">
                      <div className="text-[12.5px] text-ink-soft leading-relaxed">
                        {pickLang(
                          contact.education.master,
                          contact.education.masterZh,
                          lang,
                        )}
                      </div>
                      <div className="text-[12.5px] text-ink-soft leading-relaxed">
                        {pickLang(
                          contact.education.bachelor,
                          contact.education.bachelorZh,
                          lang,
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-baseline justify-between gap-4 pt-4 border-t border-line-soft">
                  <span className="font-mono text-[11px] text-muted">
                    {t("contact.statusLabel")}
                  </span>
                  <span className="text-[13px] text-accent">
                    {t("contact.statusValue")}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 px-1">
              <span className="h-px flex-1 bg-line-soft" />
              <span className="font-serif italic text-[13px] text-muted">
                {t("footer.endOfPage")}
              </span>
              <span className="h-px flex-1 bg-line-soft" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

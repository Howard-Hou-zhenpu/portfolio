import type { Method, Tool } from "../../data/toolkit";
import { projects } from "../../data/projects";
import { useLang, pickLang } from "../../i18n/LangContext";

interface MethodItemProps {
  type: "method";
  data: Method;
  index: number;
}

interface ToolSimpleProps {
  type: "tool";
  data: Tool;
  index: number;
}

export function ToolItem(props: MethodItemProps | ToolSimpleProps) {
  const { lang, t } = useLang();

  if (props.type === "method") {
    const { data, index } = props;
    const linked = data.usedIn
      .map((id) => projects.find((p) => p.id === id))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));
    const idx = String(index + 1).padStart(2, "0");
    const name = pickLang(data.name, data.nameZh, lang);
    const description = pickLang(data.description, data.descriptionZh, lang);

    return (
      <div className="border border-line bg-card rounded-sm p-6 md:p-7 hover:shadow-card-hover transition-shadow duration-500 ease-editorial flex flex-col">
        <div className="flex items-baseline justify-between mb-4">
          <span className="font-mono text-[10px] tracking-widish text-muted">
            M.{idx}
          </span>
          <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
            {t("toolkit.methodsLabel")}
          </span>
        </div>

        <h4 className="font-serif text-lg md:text-xl text-ink leading-tight tracking-tightish">
          {name}
        </h4>

        <p className="mt-3 text-[13px] text-ink-soft leading-relaxed">
          {description}
        </p>

        {linked.length > 0 && (
          <div className="mt-auto pt-5 border-t border-line-soft">
            <div className="font-mono text-[10px] tracking-widish text-muted uppercase mb-2">
              {t("toolkit.usedIn")}
            </div>
            <div className="flex flex-wrap gap-x-2.5 gap-y-2">
              {linked.map((p) => {
                const label =
                  lang === "zh" && p.titleZh
                    ? p.titleZh
                    : p.titleEn.split(":")[0];
                return (
                  <span
                    key={p.id}
                    className="inline-flex items-center px-2.5 py-0.5 border border-line-soft bg-canvas-soft/60 rounded-sm text-[11px] text-ink-soft tracking-tightish whitespace-nowrap"
                  >
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  const { data, index } = props;
  const idx = String(index + 1).padStart(2, "0");
  const description = pickLang(data.description, data.descriptionZh, lang);
  return (
    <div className="flex items-baseline gap-4 py-2 border-b border-line-soft last:border-b-0">
      <span className="font-mono text-[9.5px] tracking-widish text-muted-soft shrink-0 w-6">
        {idx}
      </span>
      <span className="font-sans text-[12px] text-ink-soft shrink-0 min-w-[110px] tracking-tightish">
        {data.name}
      </span>
      <span className="text-[11px] text-muted leading-relaxed">
        {description}
      </span>
    </div>
  );
}

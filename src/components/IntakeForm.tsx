import { useState, type ReactNode, type FormEvent } from "react";
import { z, type ZodSchema } from "zod";
import { AdvisoryConfirmed } from "./AdvisoryConfirmed";
import { cn } from "@/lib/utils";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "date";
  placeholder?: string;
  options?: string[];
  required?: boolean;
  full?: boolean;
};

export function IntakeForm({
  fields,
  submitLabel,
  schema,
  className,
  compactSuccess = false,
  layout = "grid",
}: {
  fields: Field[];
  submitLabel: string;
  schema: ZodSchema<Record<string, string>>;
  className?: string;
  compactSuccess?: boolean;
  layout?: "grid" | "stack" | "inline";
}) {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((f) => [f.name, ""])),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function setField(name: string, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) return <AdvisoryConfirmed compact={compactSuccess} />;

  const gridClass =
    layout === "stack"
      ? "flex flex-col gap-6"
      : layout === "inline"
      ? "flex flex-col sm:flex-row gap-3 items-stretch"
      : "grid grid-cols-1 md:grid-cols-2 gap-6";

  return (
    <form noValidate onSubmit={onSubmit} className={cn(className)}>
      <div className={gridClass}>
        {fields.map((f) => {
          const err = errors[f.name];
          const inputId = `f-${f.name}`;
          const baseCls = cn("luxury-input", err && "luxury-input-error");
          return (
            <div
              key={f.name}
              className={cn(
                layout === "grid" && f.full && "md:col-span-2",
                layout === "inline" && "flex-1",
              )}
            >
              {layout !== "inline" && (
                <label
                  htmlFor={inputId}
                  className="block text-[10px] tracking-[0.24em] uppercase text-[#FDFCFB]/60 mb-2"
                >
                  {f.label}
                </label>
              )}
              {f.type === "textarea" ? (
                <textarea
                  id={inputId}
                  className={cn(baseCls, "min-h-[120px] resize-y")}
                  placeholder={f.placeholder}
                  value={values[f.name]}
                  onChange={(e) => setField(f.name, e.target.value)}
                  maxLength={1000}
                />
              ) : f.type === "select" ? (
                <select
                  id={inputId}
                  className={baseCls}
                  value={values[f.name]}
                  onChange={(e) => setField(f.name, e.target.value)}
                >
                  <option value="">{f.placeholder ?? "Select…"}</option>
                  {f.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={inputId}
                  type={f.type ?? "text"}
                  className={baseCls}
                  placeholder={f.placeholder}
                  value={values[f.name]}
                  onChange={(e) => setField(f.name, e.target.value)}
                  maxLength={f.type === "email" ? 255 : 120}
                  aria-label={layout === "inline" ? f.label : undefined}
                />
              )}
              {err && (
                <p className="mt-2 text-[10px] tracking-[0.18em] uppercase text-[#9B3A3A]">
                  {err}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <button
        type="submit"
        className={cn(
          "cta-navy mt-8",
          layout === "inline" ? "sm:mt-0 sm:self-stretch w-full sm:w-auto" : "w-full",
        )}
      >
        {submitLabel}
      </button>
    </form>
  );
}

export const z_ = z;

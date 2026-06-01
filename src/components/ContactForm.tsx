import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(80),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(120),
  interesse: z.enum(["morar", "investir"]),
});

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      nome: fd.get("nome"),
      telefone: fd.get("telefone"),
      whatsapp: fd.get("whatsapp"),
      email: fd.get("email"),
      interesse: fd.get("interesse"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    // Integração CRM/Meta/Analytics — placeholder
    setTimeout(() => setStatus("sent"), 700);
  };

  const field = "w-full border-0 border-b border-border/80 bg-transparent px-1 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-bronze focus:outline-none transition-colors";

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <div className="eyebrow mb-4">Obrigado</div>
        <h3 className="text-3xl md:text-4xl mb-3">Recebemos seu contato</h3>
        <p className="text-muted-foreground">Nosso time entrará em contato em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7" noValidate>
      <div>
        <input name="nome" placeholder="Nome completo" className={field} maxLength={80} />
        {errors.nome && <p className="mt-1 text-xs text-destructive">{errors.nome}</p>}
      </div>
      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <input name="telefone" placeholder="Telefone" className={field} maxLength={20} />
          {errors.telefone && <p className="mt-1 text-xs text-destructive">{errors.telefone}</p>}
        </div>
        <div>
          <input name="whatsapp" placeholder="WhatsApp" className={field} maxLength={20} />
          {errors.whatsapp && <p className="mt-1 text-xs text-destructive">{errors.whatsapp}</p>}
        </div>
      </div>
      <div>
        <input name="email" type="email" placeholder="E-mail" className={field} maxLength={120} />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div>
        <p className="eyebrow mb-3">Interesse</p>
        <div className="flex flex-wrap gap-3">
          {[
            { v: "morar", label: "Morar" },
            { v: "investir", label: "Investir" },
          ].map((opt) => (
            <label key={opt.v} className="flex-1 min-w-[140px] cursor-pointer">
              <input type="radio" name="interesse" value={opt.v} className="peer sr-only" defaultChecked={opt.v === "morar"} />
              <span className="block rounded-sm border border-border bg-card/40 px-5 py-3 text-center text-sm tracking-wide transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground hover:border-bronze">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-5 text-sm tracking-[0.2em] text-primary-foreground uppercase transition hover:bg-primary/90 disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Quero Receber Informações"}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Seus dados são tratados com sigilo conforme a LGPD.
      </p>
    </form>
  );
}

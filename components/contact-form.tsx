"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { services } from "@/lib/studio";

const budgets = ["Jeszcze nie wiem", "Do 300 000 zł", "300 000–600 000 zł", "600 000–1 000 000 zł", "Powyżej 1 000 000 zł"] as const;
const serviceIds = [...services.map(service => service.id), "inne"] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Podaj imię i nazwisko.").max(100, "Wpisz maksymalnie 100 znaków."),
  email: z.string().trim().max(254, "Adres e-mail jest za długi.").pipe(z.email("Podaj poprawny adres e-mail.")),
  service: z.string().refine(value => serviceIds.some(id => id === value), "Wybierz rodzaj projektu."),
  budget: z.enum(budgets),
  message: z.string().trim().min(20, "Opisz projekt w co najmniej 20 znakach.").max(3000, "Wpisz maksymalnie 3000 znaków."),
  consent: z.boolean().refine(value => value, "Zapoznaj się z polityką prywatności i zaznacz pole."),
});

type Fields = z.infer<typeof schema>;

const subscribe = () => () => {};

function ErrorText({ id, text }: { id: string; text?: string }) {
  return text ? <p className="field-error" id={id}>{text}</p> : null;
}

function ContactFields({ service }: { service: string }) {
  const ready = useSyncExternalStore(subscribe, () => true, () => false);
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Fields>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", service, budget: budgets[0], message: "", consent: false },
  });

  return (
    <form noValidate onChange={() => { if (validated) setValidated(false); }} onSubmit={handleSubmit(() => setValidated(true))} aria-describedby="form-note">
      <fieldset disabled={!ready} className="contact-fields">
        <legend className="sr-only">Dane zapytania</legend>
        <div className="field-row">
          <div className="field">
            <label htmlFor="contact-name">Imię i nazwisko</label>
            <input id="contact-name" autoComplete="name" placeholder="Jan Kowalski" maxLength={100} required {...register("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "error-name" : undefined} />
            <ErrorText id="error-name" text={errors.name?.message} />
          </div>
          <div className="field">
            <label htmlFor="contact-email">Adres e-mail</label>
            <input id="contact-email" type="email" autoComplete="email" placeholder="jan@example.com" maxLength={254} required {...register("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "error-email" : undefined} />
            <ErrorText id="error-email" text={errors.email?.message} />
          </div>
        </div>
        <div className="field-row">
          <div className="field">
            <label htmlFor="contact-service">Rodzaj projektu</label>
            <select id="contact-service" required {...register("service")} aria-invalid={!!errors.service} aria-describedby={errors.service ? "error-service" : undefined}>
              <option value="">Wybierz rodzaj projektu</option>
              {services.map(item => <option key={item.id} value={item.id}>{item.option}</option>)}
              <option value="inne">Inny projekt</option>
            </select>
            <ErrorText id="error-service" text={errors.service?.message} />
          </div>
          <div className="field">
            <label htmlFor="contact-budget">Planowany budżet</label>
            <select id="contact-budget" {...register("budget")}>{budgets.map(budget => <option key={budget}>{budget}</option>)}</select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="contact-message">Wiadomość</label>
          <textarea id="contact-message" rows={5} placeholder="Opowiedz krótko o projekcie, lokalizacji i planowanym terminie." maxLength={3000} required {...register("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "error-message" : undefined} />
          <ErrorText id="error-message" text={errors.message?.message} />
        </div>
        <div className="consent-field">
          <div className="consent-row">
            <input id="contact-consent" type="checkbox" required {...register("consent")} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "error-consent" : undefined} />
            <label htmlFor="contact-consent">Zapoznałem się z polityką prywatności.</label>
          </div>
          <Link className="text-link" href="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">Przeczytaj politykę prywatności (nowa karta)</Link>
          <ErrorText id="error-consent" text={errors.consent?.message} />
        </div>
        <button type="submit" className="button button-dark">Sprawdź formularz</button>
      </fieldset>
      <div role="status">{validated && <p className="form-success"><CheckCircle2 size={20} aria-hidden="true" /> Formularz jest poprawnie wypełniony. To koniec demonstracji.</p>}</div>
    </form>
  );
}

export function ContactForm() {
  const selection = useSearchParams().get("usluga") ?? "";
  const service = serviceIds.some(id => id === selection) ? selection : "";
  return <ContactFields key={service} service={service} />;
}

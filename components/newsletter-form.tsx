"use client";

import { FormEvent, useState } from "react";
import { MailCheck } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="rounded-3xl border border-maroon/10 bg-maroon p-6 text-cream shadow-lg md:p-10">
      <p className="text-sm uppercase tracking-[0.2em] text-gold">Newsletter</p>
      <h3 className="mt-2 text-2xl font-bold md:text-3xl">Get festival updates & new arrivals</h3>
      <p className="mt-2 text-sm text-cream/80">
        Receive shringar inspiration, festive launch alerts, and exclusive seva offers.
      </p>

      <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 md:flex-row">
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-11 flex-1 rounded-full border border-gold/40 bg-cream px-4 text-sm text-foreground outline-none placeholder:text-muted focus:border-gold"
        />
        <button
          type="submit"
          className="h-11 rounded-full bg-gold px-6 text-sm font-semibold text-maroon transition hover:bg-saffron"
        >
          Subscribe
        </button>
      </form>

      {submitted ? (
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-gold">
          <MailCheck className="h-4 w-4" />
          Thank you! You are now part of the Poshak family.
        </p>
      ) : null}
    </div>
  );
}

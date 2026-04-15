"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-soft-green">Contact</p>
      <h1 className="mt-2 text-4xl font-bold text-maroon">We are here to help</h1>
      <p className="mt-3 max-w-3xl text-sm text-muted md:text-base">
        Need guidance for size, deity-specific styling, or delivery timelines? Reach out and our team will support you with care.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-maroon/10 bg-card p-5 shadow-sm">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 py-10 text-center animate-fade-in">
              <div className="rounded-full bg-soft-green/10 p-5">
                <Send className="h-10 w-10 text-soft-green" />
              </div>
              <h2 className="text-xl font-bold text-maroon">Message Sent with Devotion</h2>
              <p className="max-w-xs text-sm text-muted">
                Thank you for reaching out. Our seva team will review your query and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-maroon underline hover:text-saffron"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <h2 className="text-lg font-semibold text-maroon">Send us a message</h2>
              <input
                required
                className="h-11 w-full rounded-xl border border-maroon/20 bg-background px-3 text-sm outline-none focus:border-maroon"
                placeholder="Name"
              />
              <input
                required
                type="email"
                className="h-11 w-full rounded-xl border border-maroon/20 bg-background px-3 text-sm outline-none focus:border-maroon"
                placeholder="Email"
              />
              <textarea
                required
                rows={5}
                className="w-full rounded-xl border border-maroon/20 bg-background px-3 py-3 text-sm outline-none focus:border-maroon"
                placeholder="Tell us how we can help"
              />
              <button
                type="submit"
                className="inline-flex rounded-full bg-maroon px-8 py-2.5 text-sm font-semibold text-cream transition hover:bg-saffron hover:text-maroon"
              >
                Send Message
              </button>
              <p className="text-[10px] text-muted-foreground/60 italic">
                This contact form is simulated for the demo.
              </p>
            </form>
          )}
        </div>

        <div className="flex flex-col space-y-3 rounded-2xl border border-maroon/10 bg-card p-5 shadow-sm lg:justify-center">
          <h2 className="text-lg font-semibold text-maroon">Support Details</h2>
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 text-sm text-muted">
              <Phone className="h-4 w-4 text-saffron" />
              +91 98765 43210
            </p>
            <br />
            <p className="inline-flex items-center gap-2 text-sm text-muted">
              <Mail className="h-4 w-4 text-saffron" />
              seva@poshak.in
            </p>
            <br />
            <p className="inline-flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-saffron" />
              Jaipur, Rajasthan, India
            </p>
          </div>
          <div className="mt-4 border-t border-maroon/5 pt-4">
            <p className="text-xs font-semibold text-maroon uppercase tracking-wider">Support Hours</p>
            <p className="text-xs text-muted">Mon-Sat, 10:00 AM to 7:00 PM IST</p>
          </div>
        </div>
      </div>
    </div>
  );
}

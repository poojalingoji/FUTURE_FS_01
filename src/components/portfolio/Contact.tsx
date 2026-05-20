import { useState } from "react";
import { Section } from "./Section";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Loader2 } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Frontend-only demo: simulate API call. Wire to backend /api/contact when ready.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    form.reset();
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together" subtitle="I'm open to internship offers, full-time roles, collaborations, and mentorship.">
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <ContactItem icon={Mail} label="Email" value="poojalingoji@gmail.com" href="mailto:poojalingoji@gmail.com" />
          <ContactItem icon={Phone} label="Phone" value="+91 70196 21683" href="tel:+917019621683" />
          <ContactItem icon={MapPin} label="Location" value="Banahatti, Karnataka, India" />
          <ContactItem icon={Linkedin} label="LinkedIn" value="linkedin.com/in/poojalingoji" href="https://www.linkedin.com/in/poojalingoji" />
          <ContactItem icon={Github} label="GitHub" value="github.com/poojalingoji" href="https://github.com/poojalingoji" />
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 shadow-card space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Full name" placeholder="Jane Doe" />
            <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
          </div>
          <Field name="subject" label="Subject" placeholder="Internship opportunity" />
          <div>
            <label className="text-xs font-medium text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              maxLength={1000}
              placeholder="Tell me a bit about the role or project..."
              className="mt-1.5 w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/60 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-primary-foreground font-medium shadow-card hover:scale-[1.02] transition-transform disabled:opacity-60"
          >
            {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {status === "loading" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-400">Thanks! Your message has been received. I'll get back soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-destructive">Please fill out all required fields.</p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        maxLength={255}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/60"
      />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass rounded-xl p-4 flex items-center gap-4 shadow-card hover:-translate-y-0.5 transition-transform">
      <span className="h-10 w-10 rounded-lg bg-gradient-brand/20 grid place-items-center ring-gradient">
        <Icon className="h-4 w-4 text-primary" />
      </span>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

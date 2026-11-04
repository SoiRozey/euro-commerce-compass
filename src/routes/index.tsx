import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Check, X, Upload, Crown, ArrowRight, Star } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import kiki from "@/assets/kiki.png.asset.json";
import heroTex from "@/assets/hero-texture.jpg";
import { CURRENCIES, CURRENCY_FLAG, CURRENCY_SYMBOL, DICT, LANGS, LANG_FLAG, LANG_LABEL, currencyForCountry, detectCountry, detectCurrency, fmtMoney, langForCountry, localize, type Currency, type Lang } from "@/lib/i18n";
import { signupUrlFor } from "@/lib/site";

const TITLE = "90 Days Ecom Group — E-commerce & Dropshipping Community | €247 eenmalig";
const DESC =
  "De one-stop-shop community voor dropshipping en branded dropshipping. Hulp bij payment holds, ad accounts, btw, boekhouding en company formation. Eenmalig €247, 24/7 actief.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "dropshipping community, branded dropshipping, e-commerce groep, payment hold, agency ad account, btw dropshipping, company formation, ecom mentorship" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "90 Days Ecom Group — Lifetime Membership",
          description: DESC,
          brand: { "@type": "Organization", name: "90 Days Ecom Group" },
          offers: { "@type": "Offer", price: "247", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
        }),
      },
    ],
  }),
});

function Photo({ id, label, badge }: { id: string; label: string; badge?: string }) {
  const [src, setSrc] = useState<string>(kiki.url);
  const ref = useRef<HTMLInputElement>(null);
  const onFile = (f?: File) => {
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      const v = r.result as string;
      setSrc(v);
      try { localStorage.setItem(`photo-${id}`, v); } catch { /* too large */ }
    };
    r.readAsDataURL(f);
  };
  return (
    <button type="button" onClick={() => ref.current?.click()} className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl p-[3px] bg-rose-gradient shadow-glow">
      <span className="relative block h-full w-full overflow-hidden rounded-[calc(1rem-2px)]">
        <img src={src} alt={label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        {badge && (
          <span className="absolute bottom-4 left-4 rounded-full border border-border bg-background/85 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-rose-light backdrop-blur">
            {badge}
          </span>
        )}
        <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/70 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <Upload className="h-3.5 w-3.5 text-rose" />
        </span>
      </span>
      <input ref={ref} type="file" accept="image/*" hidden onChange={(e) => onFile(e.target.files?.[0])} />
      <span className="sr-only">{label}</span>
    </button>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("nl");
  const [cur, setCur] = useState<Currency>("EUR");
  const [country, setCountry] = useState<string | null>(null);
  useEffect(() => {
    // Only a manual pick from the menus is saved (new keys, so older
    // auto-saved values are ignored and the country decides again).
    const savedLang = localStorage.getItem("lang-choice") as Lang | null;
    const savedCur = localStorage.getItem("currency-choice") as Currency | null;
    const nav = navigator.language.slice(0, 2) as Lang;
    if (savedLang && LANGS.includes(savedLang)) setLang(savedLang);
    else if (LANGS.includes(nav)) setLang(nav);
    else setLang("en");
    if (savedCur && CURRENCIES.includes(savedCur)) setCur(savedCur);
    else setCur(detectCurrency());
    // The visitor's real country (IP) beats browser settings,
    // but a saved manual choice is never overridden.
    detectCountry().then((cc) => {
      if (!cc) return;
      setCountry(cc);
      if (!savedLang) setLang(langForCountry(cc));
      if (!savedCur) setCur(currencyForCountry(cc));
    });
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === "en-us" ? "en-US" : lang === "en-ca" ? "en-CA" : lang;
  }, [lang]);
  const pickLang = (l: Lang) => { setLang(l); try { localStorage.setItem("lang-choice", l); } catch { /* private mode */ } };
  const pickCur = (c: Currency) => { setCur(c); try { localStorage.setItem("currency-choice", c); } catch { /* private mode */ } };
  const t = useMemo(() => localize(DICT[lang], lang, cur), [lang, cur]);
  const signupUrl = signupUrlFor(country, cur);
  const price = fmtMoney("247", lang, cur);
  const anchor = fmtMoney("7000", lang, cur);
  const ids = ["why", "services", "results", "about", "pricing"];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="90 Days Ecom Group logo" className="h-11 w-11 rounded-full" />
            <span className="hidden font-display text-xl text-rose-gradient sm:block">90 Days Ecom Group</span>
          </a>
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground lg:flex">
            {t.nav.map((n, i) => (
              <a key={n} href={`#${ids[i]}`} className="transition-colors hover:text-rose">{n}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <select aria-label="Language" value={lang} onChange={(e) => setLang(e.target.value as Lang)} className="rounded-full border border-border bg-card px-2.5 py-2 text-xs uppercase tracking-widest sm:px-3">
              {LANGS.map((l) => <option key={l} value={l}>{LANG_FLAG[l]} {LANG_LABEL[l]}</option>)}
            </select>
            <select aria-label="Currency" value={cur} onChange={(e) => setCur(e.target.value as Currency)} className="rounded-full border border-border bg-card px-2.5 py-2 text-xs uppercase tracking-widest sm:px-3">
              {CURRENCIES.map((c) => <option key={c} value={c}>{CURRENCY_FLAG[c]} {CURRENCY_SYMBOL[c]} {c}</option>)}
            </select>
            <a href={signupUrl} className="btn-lux !px-5 !py-2.5 hidden sm:inline-flex">{t.cta}</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-screen items-center pt-24">
          <img src={heroTex} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <p className="eyebrow mb-6 flex items-center gap-2"><Crown className="h-4 w-4" />{t.eyebrow}</p>
              <h1 className="text-5xl leading-[1.02] md:text-7xl">
                {t.heroTitle[0]}<br /><span className="text-rose-gradient italic">{t.heroTitle[1]}</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground">{t.heroSub}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={signupUrl} className="btn-lux">{t.cta} — {price} <ArrowRight className="h-4 w-4" /></a>
                <a href="#results" className="btn-ghost-lux">{t.heroSecondary}</a>
              </div>
              <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex text-rose">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <span>{t.guarantee}</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-full bg-rose-gradient opacity-20 blur-3xl" />
              <img src={logo.url} alt="90 Days Ecom Group embleem" className="relative w-full rounded-full shadow-glow" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-chocolate">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
            {t.stats.map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-4xl text-rose-gradient md:text-5xl">{v}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section id="why" className="mx-auto max-w-6xl px-6 py-28">
          <h2 className="mx-auto max-w-3xl text-center text-4xl md:text-5xl">{t.vsTitle}</h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="card-lux p-10 opacity-80">
              <h3 className="text-2xl text-muted-foreground">{t.vsOthers}</h3>
              <ul className="mt-6 space-y-4">
                {t.vsOthersItems.map((i) => <li key={i} className="flex gap-3 text-muted-foreground"><X className="h-5 w-5 shrink-0 text-destructive" />{i}</li>)}
              </ul>
            </div>
            <div className="card-lux relative p-10 shadow-glow ring-1 ring-rose">
              <h3 className="text-2xl text-rose-gradient">{t.vsUs}</h3>
              <ul className="mt-6 space-y-4">
                {t.vsUsItems.map((i) => <li key={i} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-rose" />{i}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-dial py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="eyebrow text-center">{t.servicesEyebrow}</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl md:text-5xl">{t.servicesTitle}</h2>
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {t.services.map(([title, d], i) => (
                <div key={title} className="bg-background p-7 transition-colors hover:bg-card">
                  <span className="font-display text-3xl text-rose-gradient">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-xl">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="mx-auto max-w-7xl px-6 py-28">
          <p className="eyebrow text-center">{t.resultsEyebrow}</p>
          <h2 className="mt-4 text-center text-4xl md:text-5xl">{t.resultsTitle}</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.testimonials.map(([name, role, quote], i) => (
              <figure key={i} className="card-lux flex flex-col p-5">
                <div className="flex text-rose">{[...Array(5)].map((_, s) => <Star key={s} className="h-3.5 w-3.5 fill-current" />)}</div>
                <blockquote className="mt-3 flex-1 font-display text-lg italic leading-snug">“{quote}”</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold">{name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-y border-border bg-chocolate py-28">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="eyebrow">{t.aboutEyebrow}</p>
              <h2 className="mt-4 text-5xl md:text-6xl">{t.aboutTitle}</h2>
              <p className="eyebrow mt-6">{t.founder}</p>
              <div className="mt-8"><Photo id="about" label={t.upload} badge={t.founder} /></div>
            </div>
            <div className="space-y-6 font-display text-xl leading-relaxed md:pt-10">
              {/* Story order across all languages: coach story → hobby grew into the group → Kiki himself → the doubt the visitor feels → the fair chance */}
              {[0, 2, 4, 1, 3].map((n, i) => <p key={n} className={i === 0 ? "text-2xl italic text-rose-light" : i === 3 ? "text-foreground" : "text-muted-foreground"}>{t.about[n]}</p>)}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="relative py-28">
          <div id="join" className="mx-auto max-w-xl px-6 text-center">
            <p className="eyebrow">{t.pricingEyebrow}</p>
            <div className="card-lux mt-8 p-10 shadow-glow ring-1 ring-rose">
              <h2 className="text-3xl">{t.pricingTitle}</h2>
              <div className="mt-6 flex items-end justify-center gap-3">
                <span className="text-2xl text-muted-foreground line-through">{anchor}</span>
                <span className="font-display text-8xl leading-none text-rose-gradient">{price}</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{t.once}</p>
              <p className="mt-6 text-sm text-rose-light">{t.value}</p>
              <ul className="mt-8 space-y-3 text-left">
                {t.includes.map(([label, value]) => (
                  <li key={label} className="flex items-center justify-between gap-4">
                    <span className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-rose" />{label}</span>
                    {value && <span className="shrink-0 whitespace-nowrap font-display text-sm text-rose-light">{value}</span>}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-4 font-display text-lg text-rose-gradient">{t.includesTotal}</p>
              <a href={signupUrl} className="btn-lux mt-8 w-full">{t.cta} — {price} <ArrowRight className="h-4 w-4" /></a>
              <p className="mt-4 text-xs text-muted-foreground">{t.guarantee}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 pb-28">
          <h2 className="text-center text-4xl">{t.faqTitle}</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {t.faq.map(([q, a]) => (
              <details key={q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-xl">
                  {q}<span className="text-rose transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden border-t border-border py-28 text-center">
          <div className="absolute inset-0 bg-dial" />
          <div className="relative mx-auto max-w-3xl px-6">
            <h2 className="text-5xl md:text-6xl">{t.finalTitle}</h2>
            <p className="mt-6 text-lg text-muted-foreground">{t.finalSub}</p>
            <a href={signupUrl} className="btn-lux mt-10">{t.cta} — {price}</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10 text-center text-xs uppercase tracking-widest text-muted-foreground">
        <p>© {new Date().getFullYear()} 90 Days Ecom Group · {t.footer}</p>
        <p className="mt-2 text-[10px] normal-case tracking-normal opacity-70">{t.refund}</p>
      </footer>
    </div>
  );
}

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, ChevronDown, Leaf, Menu, Shield, Star, X, Zap } from "lucide-react";
import logo from "@/assets/groenklaar-logo.png";
import hero from "@/assets/zaptec-hero.png";
import driveway from "@/assets/zaptec-driveway.png";
import consult from "@/assets/zaptec-install.png";
import product from "@/assets/zaptec-product.jpg";
import house from "@/assets/zaptec-house.png";
import productsDark from "@/assets/zaptec-dark.png";
import appMockup from "@/assets/zaptec-app.png";
import family from "@/assets/zaptec-process.png";

// Palette: sage canvas, deep forest as primary, warm clay only as accent
const SAGE = "#e6ebdb";
const SAGE_DARK = "#d9e0c7";
const FOREST = "#1c2a23";
const FOREST_2 = "#2d4a3a";
const CLAY = "#c4502a";
const PAPER = "#f5f1e6";

function PrimaryBtn({ children, href = "#offerte", className = "" }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 ${className}`}
      style={{ backgroundColor: FOREST }}
    >
      {children}
      <span className="grid h-6 w-6 place-items-center rounded-full text-[10px] transition group-hover:translate-x-0.5" style={{ backgroundColor: CLAY }}>→</span>
    </a>
  );
}

function GhostBtn({ children, href = "#voordelen", className = "" }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition hover:bg-white ${className}`}
      style={{ borderColor: FOREST, color: FOREST }}
    >
      {children}
    </a>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const navItems = [
  { label: "Voordelen", href: "#voordelen" },
  { label: "Installatie", href: "#installatie" },
  { label: "App", href: "#app" },
  { label: "Prijs", href: "#prijs" },
  { label: "FAQ", href: "#faq" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="text-[#1c2a23]" style={{ backgroundColor: SAGE }}>
      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur" style={{ backgroundColor: `${SAGE}cc` }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Groenklaar — Zaptec installateur" className="h-8 w-auto md:h-9" />
          </a>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="relative transition hover:opacity-70" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <PrimaryBtn href="#offerte" className="hidden md:inline-flex">Offerte</PrimaryBtn>
            <button
              type="button"
              aria-label="Menu openen"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border md:hidden"
              style={{ borderColor: FOREST }}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <div className="border-t border-black/5 px-6 py-4 md:hidden">
            <ul className="space-y-3 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="block py-1" href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
                </li>
              ))}
              <li><PrimaryBtn href="#offerte" className="w-full">Offerte aanvragen</PrimaryBtn></li>
            </ul>
          </div>
        ) : null}
      </nav>

      {/* HERO — asymmetric editorial */}
      <section id="top" className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium">
                <span className="grid h-4 w-4 place-items-center rounded-full" style={{ backgroundColor: FOREST_2 }}>
                  <span className="pulse-dot block h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                Erkend Zaptec installateur · 4.9/5 op 124 reviews
              </div>
              <h1 className="font-display text-[clamp(2.6rem,6vw,4.4rem)] font-medium leading-[1.02]">
                Premium thuisladen,<br />
                <em className="not-italic" style={{ color: CLAY }}>Scandinavisch</em> uitgevoerd.
              </h1>
              <p className="mt-6 max-w-md text-base text-[#3a4a3f] md:text-lg">
                Zaptec laadpaal aan huis — advies, levering en strakke installatie door Groenklaar. Slim laden, load balancing en volledige controle via de Zaptec app.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PrimaryBtn href="#offerte">Check mijn meterkast gratis</PrimaryBtn>
                <GhostBtn href="#prijs">Bekijk vanaf-prijs</GhostBtn>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#3a4a3f]">
                <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" style={{ color: FOREST_2 }} /> Reactie binnen 24 uur</span>
                <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" style={{ color: FOREST_2 }} /> 2 jaar garantie op installatie</span>
                <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" style={{ color: FOREST_2 }} /> NEN 1010 conform</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative">
              <div className="overflow-hidden rounded-[28px]" style={{ backgroundColor: SAGE_DARK }}>
                <img
                  src={hero}
                  alt="Zaptec Pro laadpaal 22 kW geïnstalleerd door Groenklaar aan moderne woning"
                  width={900}
                  height={1000}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[9/10] w-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute right-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-semibold text-white" style={{ backgroundColor: FOREST }}>
                Officieel Zaptec partner
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section aria-label="Vertrouwen" className="border-y border-black/5 bg-white/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 text-center md:grid-cols-4">
          {[
            { n: "850+", l: "installaties uitgevoerd" },
            { n: "4.9★", l: "gemiddelde klantbeoordeling" },
            { n: "24 u", l: "reactie op aanvragen" },
            { n: "NL-breed", l: "service & onderhoud" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-2xl font-medium md:text-3xl">{s.n}</p>
              <p className="mt-0.5 text-xs text-[#5a6a5f]">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USPs */}
      <section id="voordelen" className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a6a5f]">Waarom Zaptec via Groenklaar</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-medium leading-[1.05] md:text-5xl">
            Eén laadpaal, drie redenen waarom hij <em className="not-italic" style={{ color: CLAY }}>écht</em> bij thuis past.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Zap, t: "Slim laden, automatisch", d: "Load balancing en automatische software-updates. Je laadpaal blijft up-to-date zonder dat jij iets hoeft te doen." },
            { icon: Leaf, t: "Past bij dynamische tarieven", d: "Combineer met dynamische stroomtarieven en zonnepanelen, zodat je laadt wanneer stroom goedkoop of groen is." },
            { icon: Shield, t: "Vakkundig geïnstalleerd", d: "Persoonlijke opname, nette kabelroute en een keurige afwerking aan je gevel. NEN 1010 conform." },
          ].map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="h-full rounded-3xl border-2 bg-white p-7 transition hover:-translate-y-1" style={{ borderColor: FOREST }}>
                <div className="grid h-10 w-10 place-items-center rounded-full" style={{ backgroundColor: SAGE_DARK }}>
                  <Icon className="h-5 w-5" style={{ color: FOREST }} />
                </div>
                <h3 className="font-display mt-5 text-xl font-medium">{t}</h3>
                <p className="mt-2 text-sm text-[#5a6a5f]">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="mx-auto max-w-7xl px-6">
        <Reveal>
          <img
            src={driveway}
            alt="Zaptec Go laadpaal naast woning met elektrische auto op de oprit"
            width={1600}
            height={700}
            loading="lazy"
            className="aspect-[16/7] w-full rounded-3xl object-cover"
          />
        </Reveal>
      </section>

      {/* DESIGN PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <h2 className="font-display max-w-2xl text-4xl font-medium leading-[1.05] md:text-5xl">
              Gebouwd voor slim thuisladen — vandaag én over vijf jaar.
            </h2>
            <p className="max-w-xs text-sm text-[#5a6a5f]">Compact, krachtig en uitbreidbaar wanneer je situatie verandert.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Compact, hoog vermogen", d: "Klein van formaat, krachtige laadprestaties tot 22 kW voor dagelijks gebruik." },
            { n: "02", t: "Altijd up-to-date", d: "Automatische software-updates houden je laadoplossing actueel — zonder losse modules." },
            { n: "03", t: "Klaar voor groei", d: "Geschikt voor meerdere auto's, dynamische tarieven en slim energiemanagement." },
          ].map((c, i) => (
            <Reveal key={c.n} delay={i * 70}>
              <div className="group h-full rounded-3xl bg-white p-7 transition hover:shadow-lg">
                <p className="font-display text-3xl font-medium" style={{ color: CLAY }}>{c.n}</p>
                <h3 className="font-display mt-4 text-xl font-medium">{c.t}</h3>
                <p className="mt-3 text-sm text-[#5a6a5f]">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOAD BALANCING VISUAL */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a6a5f]">Slim energiebeheer</p>
              <h3 className="font-display mt-3 text-3xl font-medium">Nooit meer een gesprongen hoofdzekering</h3>
              <p className="mt-3 text-sm text-[#5a6a5f]">Load balancing verlaagt automatisch het laadvermogen wanneer jouw vaatwasser, oven of warmtepomp aanslaat — en versnelt weer als er ruimte is.</p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Realtime monitoring van je hoofdaansluiting",
                  "Automatische verdeling bij meerdere laadpalen",
                  "Bediening en inzicht in de Zaptec app",
                ].map((l) => (
                  <li key={l} className="flex items-center gap-2">
                    <Check className="h-4 w-4" style={{ color: FOREST_2 }} />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative h-full overflow-hidden rounded-3xl p-8" style={{ backgroundColor: FOREST }}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Live verdeling · doordeweekse avond</p>
              <div className="mt-6 space-y-4 text-white">
                {[
                  { l: "Auto laden", v: 62, c: CLAY },
                  { l: "Warmtepomp", v: 22, c: "#9ec79a" },
                  { l: "Huishouden", v: 14, c: "#ffffff" },
                ].map((row) => (
                  <div key={row.l}>
                    <div className="flex justify-between text-xs">
                      <span>{row.l}</span>
                      <span className="opacity-70">{row.v}%</span>
                    </div>
                    <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full" style={{ width: `${row.v}%`, backgroundColor: row.c }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-white/60">Voorbeeld op basis van een 3×25A aansluiting. Zaptec stuurt het laadvermogen continu bij.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTALLATIE BANNER */}
      <section id="installatie" className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <img src={consult} alt="Monteur van Groenklaar installeert een Zaptec laadpaal" width={1600} height={700} loading="lazy" className="aspect-[16/7] w-full object-cover" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8 md:p-12">
              <div className="max-w-md text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Installatie aan huis</p>
                <h3 className="font-display mt-3 text-3xl font-medium md:text-4xl">Eén monteur, één afspraak, één strakke oplevering.</h3>
                <p className="mt-3 text-sm text-white/85">We beoordelen jouw meterkast, kabelroute en gebruik — en leveren een Zaptec-oplossing op die écht past.</p>
                <a className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1c2a23]" href="#offerte">Plan opname-gesprek</a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PRODUCT */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl bg-white p-8 md:grid-cols-2 md:p-12">
            <div>
              <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: CLAY }}>Zaptec laadoplossing</span>
              <h3 className="font-display mt-4 text-3xl font-medium md:text-4xl">Premium hardware met strak Scandinavisch design</h3>
              <p className="mt-3 text-[#5a6a5f]">Geschikt voor thuisladen met focus op gebruiksgemak, slimme software en een nette afwerking aan huis.</p>
              <PrimaryBtn href="#offerte" className="mt-6">Vraag persoonlijk advies</PrimaryBtn>
            </div>
            <img src={product} alt="Zaptec Pro laadpaal — productfoto" width={800} height={800} loading="lazy" className="mx-auto h-72 w-auto object-contain" />
          </div>
        </Reveal>
      </section>

      {/* PRIJS — anker */}
      <section id="prijs" className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a6a5f]">Indicatieve totaalprijs</p>
          <h3 className="font-display mt-3 text-3xl font-medium md:text-4xl">Transparant: inclusief Zaptec, montage en oplevering</h3>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { n: "Zaptec Go", p: "1.295", d: "Compacte thuislaadpaal. Ideaal voor 1 auto, standaard meterkast en korte kabelroute.", f: ["Tot 22 kW (afh. aansluiting)", "Zaptec app inbegrepen", "Standaard installatie tot 15 m", "2 jaar montagegarantie"] },
            { n: "Zaptec Pro + load balancing", p: "1.895", d: "Voor woningen met meerdere auto's, warmtepomp of zonnepanelen.", f: ["Slimme load balancing", "Geschikt voor uitbreiding", "Kabelroute op maat tot 25 m", "Persoonlijke begeleiding"], featured: true },
          ].map((tier) => (
            <Reveal key={tier.n}>
              <div
                className="relative h-full rounded-3xl p-8"
                style={{
                  backgroundColor: tier.featured ? FOREST : "#fff",
                  color: tier.featured ? "#fff" : "inherit",
                }}
              >
                {tier.featured ? (
                  <span className="absolute right-6 top-6 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white" style={{ backgroundColor: CLAY }}>Populair</span>
                ) : null}
                <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-70">{tier.n}</p>
                <p className="font-display mt-3 text-5xl font-medium">
                  <span className="text-base align-top opacity-70">vanaf €</span>
                  {tier.p}
                </p>
                <p className="mt-1 text-xs opacity-70">incl. installatie · excl. BTW</p>
                <p className="mt-4 text-sm" style={{ color: tier.featured ? "rgba(255,255,255,0.8)" : "#5a6a5f" }}>{tier.d}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {tier.f.map((l) => (
                    <li key={l} className="flex items-center gap-2">
                      <Check className="h-4 w-4" style={{ color: tier.featured ? "#9ec79a" : FOREST_2 }} />
                      {l}
                    </li>
                  ))}
                </ul>
                <a
                  href="#offerte"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                  style={{
                    backgroundColor: tier.featured ? CLAY : FOREST,
                    color: "#fff",
                  }}
                >
                  Vraag offerte op maat
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HUIS-MATCH */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl bg-white p-8 md:grid-cols-2 md:p-12">
            <div>
              <h3 className="font-display text-3xl font-medium md:text-4xl">Past Zaptec bij jouw woning?</h3>
              <p className="mt-3 text-[#5a6a5f]">We helpen je kiezen op basis van vermogen, meterkast, kabelroute en hoe jij je auto thuis gebruikt.</p>
              <form name="offerte" data-netlify="true" className="mt-6 flex max-w-md rounded-full border bg-white p-2" style={{ borderColor: FOREST }}>
                <input type="hidden" name="form-name" value="offerte" />
                <input name="contact" type="text" placeholder="Postcode of telefoonnummer" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none" required />
                <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: FOREST }}>
                  Check mijn woning
                  <span className="grid h-6 w-6 place-items-center rounded-full text-[10px] transition group-hover:translate-x-0.5" style={{ backgroundColor: CLAY }}>→</span>
                </button>
              </form>
              <p className="mt-3 text-xs text-[#5a6a5f]">We bellen of mailen binnen 24 uur — geen verkooppraat, alleen passend advies.</p>
            </div>
            <img src={house} alt="Zaptec laadpaal naast een Nederlandse woninggevel" width={1000} height={700} loading="lazy" className="w-full rounded-2xl object-contain" />
          </div>
        </Reveal>
      </section>

      {/* DARK SECTION */}
      <section className="text-white" style={{ backgroundColor: FOREST }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Wat Zaptec onderscheidt</p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl font-medium leading-[1.05] md:text-5xl">
              Slimme techniek, sterke software, een uitstraling die <em className="not-italic" style={{ color: "#9ec79a" }}>blijft staan</em>.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Automatische updates", d: "Nieuwe functies en verbeteringen via software — zonder onnodig gedoe." },
              { t: "Slim laden op maat", d: "Load balancing en integraties voor efficiënter thuisgebruik." },
              { t: "Net design aan de gevel", d: "Technisch sterk én visueel mooi aansluitend bij je woning." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <div className="overflow-hidden rounded-2xl bg-white/5">
                  <div className="aspect-[4/3] w-full" style={{ backgroundImage: `url(${productsDark})`, backgroundSize: "cover", backgroundPosition: `${i * 24}% center` }} />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-medium">{c.t}</h3>
                    <p className="mt-2 text-sm text-white/70">{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div id="app" className="mt-20 grid gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Zaptec app</p>
                <h3 className="font-display mt-3 text-3xl font-medium md:text-4xl">Alles in de hand, vanaf de bank.</h3>
                <p className="mt-3 text-white/70">Bekijk status, beheer laadsessies, plan goedkope nachturen en houd kosten inzichtelijk — gewoon vanaf je telefoon.</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {["Live laadstatus en historie", "Plan op dynamische tarieven", "Deel laadkosten met huisgenoten", "Ondersteuning voor meerdere auto's"].map((l) => (
                    <li key={l} className="flex items-center gap-3 rounded-full bg-white/5 px-4 py-2.5">
                      <span className="grid h-5 w-5 place-items-center rounded-full" style={{ backgroundColor: "#9ec79a" }}><Check className="h-3 w-3" style={{ color: FOREST }} /></span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <img src={appMockup} alt="Zaptec laadpaal bediend via smartphone app" width={1400} height={800} loading="lazy" className="w-full rounded-2xl object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* REVIEWS — echte namen */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display max-w-xl text-4xl font-medium leading-[1.05] md:text-5xl">Wat klanten zeggen na de installatie.</h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm">
              <div className="flex gap-0.5" style={{ color: CLAY }}>
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="font-semibold">4.9 / 5</span>
              <span className="text-xs text-[#5a6a5f]">· 124 reviews</span>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { n: "Mark V.", l: "Utrecht", c: "Strakke installatie, kabel netjes weggewerkt langs de gevel. Binnen 24 uur reactie en alles vooraf duidelijk afgestemd." },
            { n: "Sanne B.", l: "Haarlem", c: "We hebben een warmtepomp én een EV. De load balancing van Zaptec werkt feilloos — geen gesprongen hoofdzekering meer." },
            { n: "Joost & Lieke", l: "Den Bosch", c: "Eerlijk advies zonder verkooppraatje. Ze hebben ons écht geholpen kiezen, niet de duurste optie aangepraat." },
          ].map((r) => (
            <Reveal key={r.n}>
              <div className="h-full rounded-3xl bg-white p-7">
                <div className="flex gap-0.5" style={{ color: CLAY }}>
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="font-display mt-4 text-lg font-medium leading-snug">"{r.c}"</p>
                <div className="mt-5 flex items-center gap-3 border-t pt-4 text-sm" style={{ borderColor: "#e5e7eb" }}>
                  <div className="grid h-9 w-9 place-items-center rounded-full text-xs font-semibold text-white" style={{ backgroundColor: FOREST_2 }}>
                    {r.n.split(" ").map((s) => s[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold">{r.n}</p>
                    <p className="text-xs text-[#5a6a5f]">{r.l}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-hidden className="overflow-hidden border-y border-black/5 bg-white/40 py-6">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-2xl font-medium" style={{ color: FOREST }}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 gap-12 pr-12">
              {["Zaptec Pro", "Load balancing", "Strak design", "Slim thuisladen", "Erkend installateur", "NEN 1010", "Advies door Groenklaar"].map((w) => (
                <span key={w} className="inline-flex items-center gap-12">
                  {w}
                  <span style={{ color: CLAY }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="grid gap-10 rounded-3xl bg-white p-8 md:grid-cols-2 md:p-12 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a6a5f]">Zo werkt het</p>
              <h3 className="font-display mt-3 text-3xl font-medium md:text-4xl">Van eerste aanvraag tot ladende auto</h3>
              <div className="mt-6 space-y-3">
                {[
                  "Vraag vrijblijvend advies aan",
                  "We beoordelen jouw situatie en wensen",
                  "Je ontvangt een passend voorstel voor Zaptec",
                  "Na akkoord plannen we de installatie",
                  "Strakke oplevering en uitleg aan huis",
                ].map((s, i) => (
                  <div key={s} className="flex items-center gap-3 rounded-2xl px-5 py-3 text-sm" style={{ backgroundColor: PAPER }}>
                    <span className="grid h-7 w-7 place-items-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: FOREST }}>{i + 1}</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <img src={family} alt="Gebruiker activeert Zaptec laadpaal via de app" width={900} height={600} loading="lazy" className="aspect-[3/2] w-full rounded-2xl object-cover" />
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 pb-20">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#5a6a5f]">Vragen & antwoorden</p>
          <h3 className="font-display mt-3 text-center text-3xl font-medium md:text-4xl">Alles wat je wilt weten, voor je beslist.</h3>
        </Reveal>
        <div className="mt-10 space-y-3">
          {[
            { q: "Past een Zaptec laadpaal bij iedere elektrische auto?", a: "Zaptec laadpalen zijn geschikt voor thuisladen van vrijwel alle gangbare elektrische auto's met een Type 2-aansluiting." },
            { q: "Kan ik de Zaptec laadpaal bedienen met een app?", a: "Ja, via de Zaptec app kun je onder andere status bekijken, laadsessies volgen en instellingen beheren." },
            { q: "Kijken jullie mee naar mijn meterkast en situatie thuis?", a: "Ja, we adviseren op basis van jouw woning, aansluiting, laadbehoefte en gewenste plek van montage." },
            { q: "Is slim laden of load balancing mogelijk?", a: "Zaptec ondersteunt slimme functies zoals load balancing, zodat thuisladen beter afgestemd kan worden op je installatie." },
            { q: "Hoe verloopt het traject via Groenklaar?", a: "Na je aanvraag nemen we contact op, beoordelen we jouw situatie en ontvang je een passend voorstel voor levering en installatie." },
            { q: "Kan Zaptec gecombineerd worden met dynamische tarieven en zonnepanelen?", a: "Ja, juist daarvoor is Zaptec interessant. Je laadt automatisch op de goedkoopste of groenste momenten." },
          ].map((item) => (
            <Reveal key={item.q}>
              <details className="group rounded-2xl bg-white p-5">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold">
                  {item.q}
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-[#5a6a5f]">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="text-white" style={{ backgroundColor: FOREST }}>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <img src={logo} alt="Groenklaar logo" className="h-9 w-auto" />
              <p className="font-display mt-5 max-w-md text-2xl font-medium leading-tight">Klaar voor een Zaptec aan jouw woning?</p>
              <p className="mt-2 max-w-md text-sm text-white/60">Verkoop, advies en strakke installatie van Zaptec laadpalen — door heel Nederland.</p>
              <div className="mt-6 flex gap-3">
                <a href="#offerte" className="inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ backgroundColor: CLAY }}>Vraag offerte aan</a>
                <a href="#prijs" className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold">Bekijk prijzen</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Onepager</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a href="#voordelen" className="hover:text-white">Voordelen</a></li>
                <li><a href="#installatie" className="hover:text-white">Installatie</a></li>
                <li><a href="#app" className="hover:text-white">Zaptec app</a></li>
                <li><a href="#prijs" className="hover:text-white">Prijs</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Contact</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>info@groenklaar.nl</li>
                <li>Reactie binnen 24 uur</li>
                <li><a href="#top" className="hover:text-white">Terug naar boven ↑</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
            <p>© 2026 Groenklaar. Officieel Zaptec partner. KVK 00000000 · BTW NL000000000B01</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Algemene voorwaarden</a>
            </div>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/95 px-4 py-3 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.2)] backdrop-blur md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] text-[#5a6a5f]">Vanaf €1.295 incl. installatie</p>
            <p className="text-sm font-semibold">Zaptec aan huis</p>
          </div>
          <PrimaryBtn href="#offerte">Offerte</PrimaryBtn>
        </div>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </main>
  );
}

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, ChevronDown, Leaf, Shield, Star, Zap } from "lucide-react";
import logo from "@/assets/groenklaar-logo.png";
import hero from "@/assets/zaptec-hero.png";
import driveway from "@/assets/zaptec-driveway.png";
import consult from "@/assets/zaptec-install.png";
import product from "@/assets/zaptec-product.jpg";
import house from "@/assets/zaptec-house.png";
import productsDark from "@/assets/zaptec-dark.png";
import appMockup from "@/assets/zaptec-app.png";
import family from "@/assets/zaptec-process.png";

const SAGE = "#e6ebdb";
const SAGE_DARK = "#d9e0c7";
const ORANGE = "#e85d2f";
const DARK = "#1c2a23";

function Btn({ children, className = "", asLink = false, href = "#offerte" }: { children: ReactNode; className?: string; asLink?: boolean; href?: string }) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white transition hover:opacity-90 ${className}`;

  if (asLink) {
    return (
      <a className={classes} href={href} style={{ backgroundColor: ORANGE }}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} style={{ backgroundColor: ORANGE }} type="button">
      {children}
    </button>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

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

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const navItems = [
  { label: "Voordelen", href: "#voordelen" },
  { label: "Installatie", href: "#installatie" },
  { label: "App", href: "#app" },
  { label: "FAQ", href: "#faq" },
];

export default function Index() {
  return (
    <main className="font-sans text-[#1c2a23]" style={{ backgroundColor: SAGE }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Groenklaar logo" className="h-8 w-auto md:h-10" />
        </a>
        <ul className="hidden gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="transition hover:opacity-70" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="text-sm font-medium transition hover:opacity-70" href="#contact">
          Contact
        </a>
      </nav>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              De Zaptec laadpaal voor thuis, slim geregeld via Groenklaar
            </h1>
            <p className="mt-6 max-w-md text-lg text-[#3a4a3f]">
              Verkoop, advies en installatie van Zaptec laadpalen voor thuis. Slim laden, strak design en volledige controle via de Zaptec app.
            </p>
            <div className="mt-8 flex max-w-md rounded-full bg-white p-2 shadow-sm">
              <input
                type="email"
                placeholder="jouw@email.nl"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
              />
              <Btn asLink href="#offerte">Vraag advies aan</Btn>
            </div>
            <p className="mt-3 text-xs text-[#5a6a5f]">Vrijblijvend contact en helder advies voor jouw woning</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative">
            <img
              src={hero}
              alt="Zaptec laadpaal bij een moderne woning"
              width={800}
              height={800}
              className="aspect-square w-full rounded-3xl object-cover"
            />
            <div className="absolute right-4 top-4 rounded-full bg-[#2d6a3a] px-4 py-2 text-xs font-semibold text-white">
              Slim laden met Zaptec app
            </div>
          </div>
        </Reveal>
      </section>

      <section id="voordelen" className="mx-auto max-w-7xl px-6 py-10">
        <Reveal>
          <h2 className="text-center text-xl font-semibold">Waarom kiezen voor een Zaptec laadpaal via Groenklaar?</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { icon: Zap, t: "Slim laden met load balancing en automatische updates" },
            { icon: Leaf, t: "Perfect te combineren met dynamische tarieven en zonne-energie" },
            { icon: Shield, t: "Strak geïnstalleerd, persoonlijk advies en nette oplevering" },
          ].map(({ icon: Icon, t }, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-5">
                <Icon className="h-5 w-5 shrink-0 text-[#2d6a3a]" />
                <p className="text-sm font-medium">{t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <Reveal>
          <img
            src={driveway}
            alt="Zaptec laadpaal naast een woning met auto op de oprit"
            width={1600}
            height={700}
            loading="lazy"
            className="aspect-[16/7] w-full rounded-3xl object-cover"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl">Zaptec is gebouwd voor slim thuisladen</h2>
          <p className="mt-3 text-center text-[#5a6a5f]">Modern, compact en klaar voor een toekomst met elektrisch rijden</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Compact design, hoog vermogen",
              d: "De Zaptec laadpaal is klein van formaat, maar levert krachtige en slimme laadprestaties voor dagelijks gebruik.",
            },
            {
              t: "Altijd up-to-date",
              d: "Dankzij automatische software-updates blijft jouw laadoplossing actueel zonder extra gedoe of losse modules.",
            },
            {
              t: "Klaar voor groei",
              d: "Geschikt voor veranderende thuissituaties, meerdere auto's en slim energiemanagement rondom je woning.",
            },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-lg font-semibold">{c.t}</h3>
                <p className="mt-3 text-sm text-[#5a6a5f]">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <h3 className="mb-8 text-2xl font-semibold">Zo levert slim laden direct voordeel op</h3>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl bg-white p-7">
              <p className="text-sm text-[#5a6a5f]">Waarom klanten voor Zaptec kiezen</p>
              <p className="mt-2 text-5xl font-bold">Slimmer laden</p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Volledige controle via de Zaptec app",
                  "Ondersteuning voor load balancing",
                  "Klaar voor slim energiemanagement thuis",
                ].map((l) => (
                  <li key={l} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#2d6a3a]" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl bg-white p-7">
              <p className="mb-4 text-sm text-[#5a6a5f]">Slimmer laden gedurende de week</p>
              <div className="flex h-56 items-end gap-3">
                {[48, 62, 76, 84, 73, 93, 68].map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <div className="w-full rounded-t-md" style={{ height: `${h}%`, backgroundColor: i === 5 ? "#2d6a3a" : "#cdd9b4" }} />
                    <span className="text-[10px] text-[#5a6a5f]">{["M","D","W","D","V","Z","Z"][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="installatie" className="relative mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={consult}
              alt="Installatie van een Zaptec laadpaal aan huis"
              width={1600}
              height={700}
              loading="lazy"
              className="aspect-[16/7] w-full object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-10">
              <div className="max-w-md text-white">
                <h3 className="text-3xl font-bold">Persoonlijk advies en nette installatie</h3>
                <p className="mt-3 text-sm">
                  We kijken naar jouw meterkast, laadbehoefte en situatie op locatie, zodat je een Zaptec-oplossing krijgt die echt past.
                </p>
                <a className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1c2a23]" href="#offerte">
                  Vrijblijvende offerte
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl bg-white p-10 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-[#ffd9c9] px-3 py-1 text-xs font-semibold text-[#e85d2f]">Zaptec laadoplossing</span>
              <h3 className="mt-4 text-3xl font-bold">Een premium laadpaal met strak Scandinavisch design</h3>
              <p className="mt-3 text-[#5a6a5f]">Geschikt voor thuisladen met focus op gebruiksgemak, slimme software en een nette afwerking aan huis.</p>
              <Btn asLink href="#offerte" className="mt-6">Ontvang advies</Btn>
            </div>
            <img src={product} alt="Productfoto van een Zaptec laadpaal" width={800} height={800} loading="lazy" className="mx-auto h-72 w-auto object-contain" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl bg-white p-10 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold">Past Zaptec bij jouw woning?</h3>
              <p className="mt-3 text-[#5a6a5f]">Wij helpen je kiezen op basis van vermogen, meterkast, kabelroute en hoe jij je auto thuis gebruikt.</p>
              <div id="offerte" className="mt-6 flex max-w-md rounded-full border bg-white p-2">
                <input placeholder="Postcode of telefoonnummer" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none" />
                <Btn asLink href="#contact">Advies aanvragen</Btn>
              </div>
            </div>
            <img src={house} alt="Zaptec laadpaal naast een woninggevel" width={1000} height={700} loading="lazy" className="w-full rounded-2xl object-contain" />
          </div>
        </Reveal>
      </section>

      <section className="text-white" style={{ backgroundColor: DARK }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <h2 className="text-center text-4xl font-bold">Wat Zaptec onderscheidt</h2>
            <p className="mt-3 text-center text-white/70">Slimme techniek, sterke software en een uitstraling die bij moderne woningen past</p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Automatische updates", d: "Nieuwe functies en verbeteringen worden via software toegevoegd zonder onnodig gedoe." },
              { t: "Slim laden op maat", d: "Zaptec ondersteunt slim laden, load balancing en integraties voor efficiënter thuisgebruik." },
              { t: "Net design aan de gevel", d: "Een laadpaal die technisch sterk is én visueel mooi aansluit bij je woning." },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="overflow-hidden rounded-2xl bg-white/5">
                  <div
                    className="aspect-[4/3] w-full"
                    style={{
                      backgroundImage: `url(${productsDark})`,
                      backgroundSize: "cover",
                      backgroundPosition: `${i * 24}% center`,
                    }}
                  />
                  <div className="p-6">
                    <h3 className="font-semibold">{c.t}</h3>
                    <p className="mt-2 text-sm text-white/70">{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <div>
                <h3 className="text-3xl font-bold">Een laadoplossing die meebeweegt met jouw situatie</h3>
                <p className="mt-3 text-white/70">Van eerste EV tot een huishouden met meerdere elektrische auto's: Zaptec is gemaakt om slim op te schalen.</p>
                <div className="mt-6 space-y-3">
                  {[
                    "Slim laden via Zaptec software",
                    "Ondersteuning voor load balancing",
                    "Geschikt voor moderne thuisinstallaties",
                    "Advies en plaatsing via Groenklaar",
                  ].map((l) => (
                    <label key={l} className="flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 text-sm">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[#2d6a3a]"><Check className="h-3 w-3" /></span>
                      {l}
                    </label>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <img src={productsDark} alt="Zaptec laadpaal aan donkere gevel" width={1600} height={700} loading="lazy" className="aspect-square w-full rounded-3xl object-cover" />
            </Reveal>
          </div>

          <div id="app" className="mt-20 text-center">
            <Reveal>
              <h3 className="text-3xl font-bold">Volledige controle met de Zaptec app</h3>
              <p className="mt-3 text-white/70">Bekijk status, beheer laadsessies en houd grip op je laadmomenten, gewoon vanaf je telefoon.</p>
              <img src={appMockup} alt="Zaptec laadpaal bediend via smartphone app" width={1400} height={800} loading="lazy" className="mx-auto mt-10 w-full max-w-4xl rounded-2xl object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold">Dit is wat klanten belangrijk vinden</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { n: "Strakke installatie", c: "De laadpaal past mooi bij het huis en alles is netjes afgewerkt." },
            { n: "Slim in gebruik", c: "De app maakt het makkelijk om laden te volgen en slim te plannen." },
            { n: "Duidelijk advies", c: "We wisten vooraf precies wat bij onze situatie paste en waarom." },
            { n: "Premium gevoel", c: "Zaptec voelt degelijk, modern en klaar voor de toekomst." },
          ].map((r, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="rounded-2xl bg-white p-6">
                <div className="flex gap-1 text-[#e85d2f]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm">{r.c}</p>
                <p className="mt-4 text-xs font-semibold">{r.n}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="rounded-3xl bg-white p-10 text-center">
            <p className="text-4xl font-bold">Een laadpaal kiezen hoeft niet ingewikkeld te zijn</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-[#5a6a5f]">
              <span>Zaptec appbediening</span>
              <span>Strak design</span>
              <span>Slim thuisladen</span>
              <span>Advies door Groenklaar</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="grid gap-10 rounded-3xl bg-white p-10 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-3xl font-bold">Zo werkt het traject</h3>
              <div className="mt-6 space-y-3">
                {[
                  "Vraag vrijblijvend advies aan",
                  "We beoordelen jouw situatie en wensen",
                  "Je ontvangt een passend voorstel voor Zaptec",
                  "Na akkoord plannen we de installatie in",
                ].map((s, i) => (
                  <div key={s} className="flex items-center gap-3 rounded-full bg-[#f4f1e8] px-5 py-3 text-sm">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#2d6a3a] text-xs font-bold text-white">{i + 1}</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <img src={family} alt="Gebruiker activeert Zaptec laadpaal via de app" width={900} height={600} loading="lazy" className="aspect-[3/2] w-full rounded-2xl object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="grid gap-6 rounded-3xl p-10 md:grid-cols-2 md:items-center" style={{ backgroundColor: SAGE_DARK }}>
            <div>
              <h3 className="text-2xl font-bold">Benieuwd of Zaptec bij jouw woning past?</h3>
              <p className="mt-2 text-sm text-[#3a4a3f]">Laat je gegevens achter en we nemen contact op voor passend advies.</p>
            </div>
            <div className="flex gap-3">
              <input placeholder="Telefoonnummer of e-mail" className="flex-1 rounded-full bg-white px-5 py-3 text-sm outline-none" />
              <Btn asLink href="#contact">Plan contact</Btn>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <h3 className="mb-8 text-2xl font-bold">Meer van Zaptec in beeld</h3>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { title: "Zaptec aan huis", image: hero },
            { title: "Appbediening", image: appMockup },
            { title: "Strakke afwerking", image: product },
            { title: "Slim laden", image: consult },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="overflow-hidden rounded-2xl bg-white text-center">
                <img src={item.image} alt={item.title} loading="lazy" className="h-40 w-full object-cover" />
                <div className="p-6">
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs text-[#5a6a5f]">Zaptec via Groenklaar</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-6 pb-20">
        <Reveal>
          <h3 className="mb-8 text-center text-3xl font-bold">Vragen & antwoorden</h3>
        </Reveal>
        <div className="space-y-3">
          {[
            {
              q: "Past een Zaptec laadpaal bij iedere elektrische auto?",
              a: "Zaptec laadpalen zijn geschikt voor thuisladen van vrijwel alle gangbare elektrische auto's met een Type 2-aansluiting.",
            },
            {
              q: "Kan ik de Zaptec laadpaal bedienen met een app?",
              a: "Ja, via de Zaptec app kun je onder andere status bekijken, laadsessies volgen en instellingen beheren.",
            },
            {
              q: "Kijken jullie mee naar mijn meterkast en situatie thuis?",
              a: "Ja, we adviseren op basis van jouw woning, aansluiting, laadbehoefte en gewenste plek van montage.",
            },
            {
              q: "Is slim laden of load balancing mogelijk?",
              a: "Zaptec ondersteunt slimme functies zoals load balancing, zodat thuisladen beter afgestemd kan worden op je installatie.",
            },
            {
              q: "Hoe verloopt het traject via Groenklaar?",
              a: "Na je aanvraag nemen we contact op, beoordelen we jouw situatie en ontvang je een passend voorstel voor levering en installatie.",
            },
            {
              q: "Kan Zaptec gecombineerd worden met slim energiegebruik thuis?",
              a: "Ja, Zaptec is juist interessant voor huishoudens die slim willen laden en hun energieverbruik beter willen sturen.",
            },
          ].map((item) => (
            <Reveal key={item.q}>
              <details className="group rounded-2xl bg-white p-5">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium">
                  {item.q}
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-[#5a6a5f]">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <footer id="contact" className="text-white" style={{ backgroundColor: DARK }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div>
            <img src={logo} alt="Groenklaar logo" className="h-9 w-auto" />
            <p className="mt-3 text-sm text-white/60">Verkoop en advies voor Zaptec laadpalen aan huis, met oog voor afwerking, gebruiksgemak en slim laden.</p>
          </div>
          <div>
            <p className="font-semibold">Onepager</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><a href="#voordelen">Voordelen</a></li>
              <li><a href="#installatie">Installatie</a></li>
              <li><a href="#app">Zaptec app</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Oplossing</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>Zaptec laadpaal</li>
              <li>Persoonlijk advies</li>
              <li>Nette plaatsing</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>Vraag vrijblijvend advies aan</li>
              <li>Via Groenklaar</li>
              <li><a href="#top">Terug naar boven</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/50">© 2026 Groenklaar. Alle rechten voorbehouden.</div>
      </footer>
    </main>
  );
}
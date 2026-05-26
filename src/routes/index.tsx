import { Check, ChevronDown, Zap, Leaf, Shield, Star } from "lucide-react";
import hero from "@/assets/hero-installer.jpg";
import driveway from "@/assets/lifestyle-driveway.jpg";
import consult from "@/assets/lifestyle-consult.jpg";
import product from "@/assets/product-charger.jpg";
import house from "@/assets/house-render.jpg";
import productsDark from "@/assets/products-dark.jpg";
import appMockup from "@/assets/app-mockup.jpg";
import family from "@/assets/process-family.jpg";

const SAGE = "#e6ebdb";
const SAGE_DARK = "#d9e0c7";
const ORANGE = "#e85d2f";
const DARK = "#1c2a23";

function Btn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`rounded-full px-6 py-3 font-semibold text-white transition hover:opacity-90 ${className}`}
      style={{ backgroundColor: ORANGE }}
    >
      {children}
    </button>
  );
}

export default function Index() {
  return (
    <main className="font-sans text-[#1c2a23]" style={{ backgroundColor: SAGE }}>
      {/* NAV */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="text-2xl font-bold tracking-tight">e-laad</div>
        <ul className="hidden gap-8 text-sm font-medium md:flex">
          <li>Producten</li>
          <li>Installatie</li>
          <li>Over ons</li>
          <li>Support</li>
        </ul>
        <button className="text-sm font-medium">Inloggen</button>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            De slimme laadpaal voor thuis
          </h1>
          <p className="mt-6 max-w-md text-lg text-[#3a4a3f]">
            Laad je elektrische auto sneller, goedkoper en duurzamer met onze HomeCharger. Inclusief installatie binnen 2 weken.
          </p>
          <div className="mt-8 flex max-w-md rounded-full bg-white p-2 shadow-sm">
            <input
              type="email"
              placeholder="jouw@email.nl"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
            />
            <Btn>Bereken jouw prijs</Btn>
          </div>
          <p className="mt-3 text-xs text-[#5a6a5f]">Vrijblijvend en in 1 minuut klaar</p>
        </div>
        <div className="relative">
          <img
            src={hero}
            alt="Installateur monteert een laadpaal aan een woning"
            width={800}
            height={800}
            className="aspect-square w-full rounded-3xl object-cover"
          />
          <div className="absolute right-4 top-4 rounded-full bg-[#2d6a3a] px-4 py-2 text-xs font-semibold text-white">
            Nu €350 voordeel
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-center text-xl font-semibold">Dit is waarom je kiest voor HomeCharger</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { icon: Zap, t: "Tot 3x sneller laden dan een gewoon stopcontact" },
            { icon: Leaf, t: "Laad altijd op het groenste en goedkoopste moment" },
            { icon: Shield, t: "5 jaar garantie en gratis onderhoud" },
          ].map(({ icon: Icon, t }, i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl bg-white/60 p-5">
              <Icon className="h-5 w-5 shrink-0 text-[#2d6a3a]" />
              <p className="text-sm font-medium">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIFESTYLE BANNER */}
      <section className="mx-auto max-w-7xl px-6">
        <img src={driveway} alt="Auto laadt op de oprit" width={1600} height={700} loading="lazy" className="aspect-[16/7] w-full rounded-3xl object-cover" />
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl">
          Met HomeCharger laad je slimmer
        </h2>
        <p className="mt-3 text-center text-[#5a6a5f]">Drie redenen waarom duizenden Nederlanders ons al kozen</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Bespaar tot €600 per jaar", d: "Door dynamisch te laden tijdens de daluren betaal je gemiddeld 40% minder voor je stroom." },
            { t: "Sluit naadloos aan op zonnepanelen", d: "Onze laadpaal gebruikt automatisch je eigen opgewekte zonnestroom om je auto te laden." },
            { t: "Volledig toekomstbestendig", d: "Met OTA-updates blijft je laadpaal jarenlang up-to-date met de nieuwste functies." },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-3 text-sm text-[#5a6a5f]">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAVINGS + CHART */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h3 className="mb-8 text-2xl font-semibold">Bespaar elke maand op laadkosten</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7">
            <p className="text-sm text-[#5a6a5f]">Gemiddelde besparing per jaar</p>
            <p className="mt-2 text-5xl font-bold">€612</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Dynamisch laden tijdens daluren", "Zelf opgewekte zonnestroom benutten", "Geen abonnementskosten"].map((l) => (
                <li key={l} className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2d6a3a]" />{l}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-7">
            <p className="mb-4 text-sm text-[#5a6a5f]">Maandelijkse laadkosten</p>
            <div className="flex h-56 items-end gap-3">
              {[40, 55, 70, 90, 75, 95, 60].map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-md" style={{ height: `${h}%`, backgroundColor: i === 5 ? "#2d6a3a" : "#cdd9b4" }} />
                  <span className="text-[10px] text-[#5a6a5f]">{["J","F","M","A","M","J","J"][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSTALL CONSULT */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={consult} alt="Adviseur in gesprek met klant" width={1600} height={700} loading="lazy" className="aspect-[16/7] w-full object-cover" />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-10">
            <div className="max-w-md text-white">
              <h3 className="text-3xl font-bold">Duurzame en eenvoudige installatie</h3>
              <p className="mt-3 text-sm">Onze gecertificeerde monteurs plaatsen jouw laadpaal binnen één dag. Inclusief alle benodigde aanpassingen.</p>
              <button className="mt-5 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1c2a23]">Vrijblijvende offerte</button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT BANNER */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid items-center gap-10 rounded-3xl bg-white p-10 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-[#ffd9c9] px-3 py-1 text-xs font-semibold text-[#e85d2f]">Voor elk huishouden</span>
            <h3 className="mt-4 text-3xl font-bold">De laagste prijs per laadbeurt</h3>
            <p className="mt-3 text-[#5a6a5f]">Vanaf €899 inclusief installatie. Geen verborgen kosten, geen abonnement.</p>
            <Btn className="mt-6">Bekijk de prijzen</Btn>
          </div>
          <img src={product} alt="Laadpaal productfoto" width={800} height={800} loading="lazy" className="mx-auto h-72 w-auto object-contain" />
        </div>
      </section>

      {/* HOUSE RENDER */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid items-center gap-10 rounded-3xl bg-white p-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold">Gegarandeerd stroomvoordeel</h3>
            <p className="mt-3 text-[#5a6a5f]">Reken zelf uit hoeveel je bespaart met HomeCharger op basis van jouw rijgedrag.</p>
            <div className="mt-6 flex max-w-md rounded-full border bg-white p-2">
              <input placeholder="km per jaar" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none" />
              <Btn>Bereken</Btn>
            </div>
          </div>
          <img src={house} alt="Huis met laadpaal render" width={1000} height={700} loading="lazy" className="w-full rounded-2xl object-contain" />
        </div>
      </section>

      {/* DARK SECTION */}
      <section className="text-white" style={{ backgroundColor: DARK }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-center text-4xl font-bold">Wat HomeCharger uniek maakt</h2>
          <p className="mt-3 text-center text-white/70">Drie kenmerken die je nergens anders vindt</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Modulair ontwerp", d: "Breid uit met een tweede aansluiting wanneer je het nodig hebt." },
              { t: "Dynamische lastverdeling", d: "Slim verdelen van stroom over je huis en auto, zonder zekeringen om te wisselen." },
              { t: "Eigen energiemanagement", d: "Combineer met zonnepanelen en thuisbatterij voor maximale besparing." },
            ].map((c, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-white/5">
                <div className="aspect-[4/3] w-full" style={{ backgroundImage: `url(${productsDark})`, backgroundSize: "cover", backgroundPosition: `${i * 50}% center` }} />
                <div className="p-6">
                  <h3 className="font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm text-white/70">{c.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CONFIGURATOR */}
          <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-3xl font-bold">De meest geavanceerde thuislader van dit moment</h3>
              <p className="mt-3 text-white/70">Configureer in een paar klikken jouw perfecte set-up.</p>
              <div className="mt-6 space-y-3">
                {["Laadvermogen tot 22 kW", "Bidirectioneel laden (V2H ready)", "Geschikt voor 1- en 3-fase", "Inclusief installatie in 2 weken"].map((l) => (
                  <label key={l} className="flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 text-sm">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-[#2d6a3a]"><Check className="h-3 w-3" /></span>
                    {l}
                  </label>
                ))}
              </div>
            </div>
            <img src={consult} alt="Klant en installateur" width={1600} height={700} loading="lazy" className="aspect-square w-full rounded-3xl object-cover" />
          </div>

          {/* APP */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold">Volledige controle met de HomeCharger app</h3>
            <p className="mt-3 text-white/70">Bekijk verbruik, plan laadsessies en stuur op afstand bij.</p>
            <img src={appMockup} alt="App schermen" width={1400} height={800} loading="lazy" className="mx-auto mt-10 w-full max-w-4xl rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Dit is wat klanten zeggen</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { n: "Mark V.", c: "Installatie verliep vlekkeloos en de app werkt fantastisch." },
            { n: "Sanne D.", c: "Eindelijk een laadpaal die meegroeit met onze zonnepanelen." },
            { n: "Joris K.", c: "Bespaart ons honderden euro's per jaar. Aanrader!" },
            { n: "Eva B.", c: "Snelle levering, mooie afwerking en top klantenservice." },
          ].map((r, i) => (
            <div key={i} className="rounded-2xl bg-white p-6">
              <div className="flex gap-1 text-[#e85d2f]">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-3 text-sm">{r.c}</p>
              <p className="mt-4 text-xs font-semibold">{r.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-10 text-center">
          <p className="text-4xl font-bold">Al 18.000+ tevreden klanten kozen voor e-laad</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-[#5a6a5f]">
            <span>★★★★★ Trustpilot 4.8</span>
            <span>Google 4.9</span>
            <span>Independer 9.2</span>
            <span>Eneco Partner</span>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-10 rounded-3xl bg-white p-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-3xl font-bold">Het simpele e-laad proces</h3>
            <div className="mt-6 space-y-3">
              {["Bereken jouw prijs online", "Plan een gratis adviesgesprek", "Installatie binnen 2 weken", "Direct besparen op laadkosten"].map((s, i) => (
                <div key={s} className="flex items-center gap-3 rounded-full bg-[#f4f1e8] px-5 py-3 text-sm">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#2d6a3a] text-xs font-bold text-white">{i + 1}</span>
                  {s}
                </div>
              ))}
            </div>
          </div>
          <img src={family} alt="Familie bestelt online" width={900} height={600} loading="lazy" className="aspect-[3/2] w-full rounded-2xl object-cover" />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 rounded-3xl p-10 md:grid-cols-2 md:items-center" style={{ backgroundColor: SAGE_DARK }}>
          <div>
            <h3 className="text-2xl font-bold">Verdien je laadpaal terug in 2 jaar</h3>
            <p className="mt-2 text-sm text-[#3a4a3f]">Bereken jouw persoonlijke terugverdientijd.</p>
          </div>
          <div className="flex gap-3">
            <input placeholder="Postcode" className="flex-1 rounded-full bg-white px-5 py-3 text-sm outline-none" />
            <Btn>Start berekening</Btn>
          </div>
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h3 className="mb-8 text-2xl font-bold">Ontdek onze andere producten</h3>
        <div className="grid gap-6 md:grid-cols-4">
          {["Thuisbatterij", "Zonnepanelen", "Warmtepomp", "Energiecontract"].map((p) => (
            <div key={p} className="rounded-2xl bg-white p-6 text-center">
              <div className="mx-auto mb-4 h-32 w-full rounded-xl bg-[#f4f1e8]" />
              <p className="font-semibold">{p}</p>
              <p className="mt-1 text-xs text-[#5a6a5f]">Meer weten →</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h3 className="mb-8 text-center text-3xl font-bold">Vragen & antwoorden</h3>
        <div className="space-y-3">
          {[
            "Hoe lang duurt de installatie van een laadpaal?",
            "Werkt de laadpaal met al mijn elektrische auto's?",
            "Heb ik een verzwaarde aansluiting nodig?",
            "Kan ik de laadpaal koppelen aan zonnepanelen?",
            "Wat zit er allemaal in de prijs inbegrepen?",
            "Hoe werkt de garantie en het onderhoud?",
          ].map((q) => (
            <details key={q} className="group rounded-2xl bg-white p-5">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-medium">
                {q}
                <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-[#5a6a5f]">
                Onze installateurs nemen alles voor je uit handen. Neem contact op voor een vrijblijvend advies.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white" style={{ backgroundColor: DARK }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div>
            <p className="text-2xl font-bold">e-laad</p>
            <p className="mt-3 text-sm text-white/60">De slimste laadpaal voor jouw thuis. Geen abonnementen, wel zekerheid.</p>
          </div>
          <div>
            <p className="font-semibold">Producten</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>HomeCharger</li><li>Pro 22kW</li><li>Installatie</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Over e-laad</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>Onze missie</li><li>Werken bij</li><li>Pers</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>085 - 123 4567</li><li>hallo@e-laad.nl</li><li>Ma-Vr 9-18u</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/50">© 2026 e-laad. Alle rechten voorbehouden.</div>
      </footer>
    </main>
  );
}

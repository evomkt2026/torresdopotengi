import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin, Shield, Trees, Leaf, Sparkles, Wine,
  Bed, Bath, Car, Wind, ChefHat, ArrowUpDown,
  Phone, Instagram, Facebook, MessageCircle,
  Waves, Dumbbell, Utensils, Baby, PartyPopper, Trophy,
  Briefcase, Footprints, Dog, WashingMachine, Sun, ToyBrick,
  ArrowRight,
} from "lucide-react";

import heroTower from "@/assets/hero-tower.png.asset.json";
import planSmart from "@/assets/plans/smart.jpg.asset.json";
import planLiving from "@/assets/plans/living.jpg.asset.json";
import planComfort from "@/assets/plans/comfort.jpg.asset.json";
import galAerial from "@/assets/gallery/aerial.jpeg.asset.json";
import galFacade from "@/assets/gallery/facade.jpg.asset.json";
import galRooftop from "@/assets/gallery/rooftop.jpg.asset.json";
import galPoolDay from "@/assets/gallery/pool-day.jpg.asset.json";
import galPoolSunset from "@/assets/gallery/pool-sunset.png.asset.json";
import galGym from "@/assets/gallery/gym.jpg.asset.json";
import galParty from "@/assets/gallery/party.jpeg.asset.json";
import galKids from "@/assets/gallery/kids.jpeg.asset.json";
import galCarwash from "@/assets/gallery/carwash.png.asset.json";
import torresLogo from "@/assets/logos/torres.png.asset.json";

import aliancaLogoV2 from "@/assets/logos/alianca-nova.png.asset.json";
import aliancaWhite from "@/assets/logos/alianca-white.png.asset.json";
import lsEngenharia from "@/assets/logos/ls-engenharia.png.asset.json";
import mcmvLogo from "@/assets/logos/mcmv.webp.asset.json";
import caixaLogo from "@/assets/logos/caixa-white.png.asset.json";

import { WhatsAppButton, whatsappUrl } from "@/components/WhatsAppButton";
import { Lightbox } from "@/components/Lightbox";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Torres do Potengi — Alto Padrão na Zona Norte de Natal" },
      { name: "description", content: "Empreendimento mais alto da Zona Norte de Natal. Apartamentos de 2 quartos, 41 a 65m², lazer completo, vista para o Potengi. Agende sua visita." },
      { property: "og:title", content: "Torres do Potengi — Alto Padrão em Natal" },
      { property: "og:description", content: "A melhor vista do Potengi. 18 pavimentos, lazer completo, financiamento MCMV." },
      { property: "og:image", content: heroTower.url },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: heroTower.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Residence",
        name: "Torres do Potengi",
        description: "Empreendimento residencial de alto padrão na Zona Norte de Natal",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Natal",
          addressRegion: "RN",
          streetAddress: "Av. Dr. João Medeiros Filho, Panatis",
          addressCountry: "BR",
        },
      }),
    }],
  }),
  component: LandingPage,
});

const differentials = [
  { icon: MapPin, title: "Localização Privilegiada", desc: "Entre as principais avenidas do Panatis, com fácil acesso a toda Natal." },
  { icon: Shield, title: "Segurança 24h", desc: "Portaria blindada, controle de acesso biométrico e monitoramento integral." },
  { icon: Trees, title: "Lazer Completo", desc: "Verdadeiro condomínio clube com mais de 15 itens equipados." },
  { icon: Leaf, title: "Sustentabilidade", desc: "Reuso de água, painéis solares e estação para veículos elétricos." },
  { icon: Sparkles, title: "Acabamentos Premium", desc: "Materiais selecionados, design contemporâneo e atemporal." },
  { icon: Wine, title: "Rooftop Exclusivo", desc: "Wine Rooftop em cada torre, com vista para o rio e o mar." },
];

const specs = [
  { icon: Bed, label: "Quartos", value: "2" },
  { icon: Bath, label: "\n", value: "Opções com Suíte" },
  { icon: Wind, label: "Varanda", value: "Opção com (Planta COMFORT)" },
  { icon: Car, label: "Vagas", value: "1 a 2" },
  { icon: ChefHat, label: "Cozinha", value: "Integrada" },
  { icon: ArrowUpDown, label: "Elevadores", value: "2 por torre" },
];

const amenities = [
  { icon: Waves, title: "Piscina" },
  { icon: Dumbbell, title: "Academia" },
  { icon: Briefcase, title: "Coworking" },
  { icon: Wine, title: "Wine Bar" },
  { icon: Utensils, title: "Sports Bar" },
  { icon: Trophy, title: "Quadras" },
  { icon: Footprints, title: "Pista de Cooper" },
  { icon: Dog, title: "Espaço Pet" },
  { icon: Baby, title: "Playground" },
  { icon: ToyBrick, title: "Espaço Kids" },
  { icon: PartyPopper, title: "Salão de Festas" },
  { icon: ChefHat, title: "Espaço Gourmet" },
  { icon: WashingMachine, title: "Lavanderia" },
  { icon: Sun, title: "Outdoor Training" },
  { icon: Car, title: "Car Wash" },
];

const plans = [
  {
    img: planSmart.url,
    area: "41 m²",
    title: "Planta SMART",
    desc: "2 quartos, 1 banheiro social, 1 vaga e sala/cozinha integrada.",
    features: [
      "Sala de estar/jantar e cozinha integrada",
      "02 quartos",
      "BWC social",
      "Laje técnica",
      "01 vaga de garagem",
    ],
  },
  {
    img: planLiving.url,
    area: "48,25 m²",
    title: "Planta LIVING",
    desc: "2 quartos (1 suíte), 2 banheiros, 1 vaga e sala/cozinha integrada.",
    features: [
      "Sala de estar/jantar e cozinha integrada",
      "02 quartos, sendo 01 suíte",
      "BWC social",
      "Laje técnica",
      "01 vaga de garagem",
    ],
  },
  {
    img: planComfort.url,
    area: "65,85 m²",
    title: "Planta COMFORT",
    desc: "2 quartos (1 suíte), 2 banheiros, 2 vagas e varanda.",
    features: [
      "Sala de estar/jantar e cozinha integrada",
      "Varanda",
      "02 quartos, sendo 01 suíte",
      "BWC social",
      "Laje técnica",
      "02 vagas de garagem",
    ],
  },
];

const gallery = [
  { src: galFacade.url, alt: "Fachada Torres do Potengi", caption: "Fachada — 18 pavimentos com vista privilegiada" },
  { src: galAerial.url, alt: "Vista aérea do empreendimento", caption: "Vista aérea — entre o Potengi e o mar" },
  { src: galPoolSunset.url, alt: "Piscina ao pôr do sol", caption: "Piscina ao pôr do sol" },
  { src: galPoolDay.url, alt: "Piscina e deck", caption: "Piscina com deck molhado e lounges" },
  { src: galRooftop.url, alt: "Wine Rooftop", caption: "Wine Rooftop — vista para o rio e o mar" },
  { src: galParty.url, alt: "Salão de festas", caption: "Salão de festas integrado ao lazer" },
  { src: galGym.url, alt: "Academia equipada", caption: "Academia equipada com vista" },
  { src: galKids.url, alt: "Espaço kids", caption: "Espaço kids temático" },
  { src: galCarwash.url, alt: "Espaço Car Wash", caption: "Espaço Car Wash" },
];


const locationPoints = [
  "5 min — Escolas de referência",
  "3 min — Supermercados",
  "8 min — Hospitais",
  "15 min — Praias da Redinha",
  "10 min — Centros comerciais",
];

function LandingPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-1">
          <a href="#top" className="flex items-center">
            <img src={torresLogo.url} alt="Residencial Torres do Potengi" className="h-40 md:h-48 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex items-center gap-9 text-sm tracking-wide text-muted-foreground font-bold">
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#diferenciais" className="hover:text-foreground transition">Diferenciais</a>
            <a href="#galeria" className="hover:text-foreground transition">Galeria</a>
            <a href="#plantas" className="hover:text-foreground transition">Plantas</a>
            <Link to="/videos" className="hover:text-foreground transition">Vídeos</Link>
            <a href="#localizacao" className="hover:text-foreground transition">Localização</a>
          </nav>
          <a href="#contato" className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition">
            Quero saber mais
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroTower.url}
          alt="Torres do Potengi vista aérea ao pôr do sol"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
            <div className="max-w-3xl text-white fade-up">
              <h1 className="text-balance text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]">
                A melhor vista <em className="not-italic font-light italic text-cream">do Potengi</em>.
              </h1>
              <p className="mt-6 max-w-xl text-base md:text-lg text-white/85 font-light">
                O empreendimento mais alto da Zona Norte. 18 pavimentos, apartamentos de 2 quartos, lazer completo e condições facilitadas.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contato"
                  className="group inline-flex items-center gap-3 bg-cream text-foreground px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-white transition"
                >
                  Agende uma visita
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-white/10 transition"
                >
                  Falar no WhatsApp
                </a>
              </div>
              <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/20 pt-6 text-white/90">
                {[
                  { v: "18", l: "Pavimentos" },
                  { v: "41–65m²", l: "Área privativa" },
                  { v: "15+", l: "Itens de lazer" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl md:text-3xl font-light">{s.v}</div>
                    <div className="text-[0.65rem] tracking-[0.25em] uppercase text-white/60 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <p className="eyebrow mb-5">Sobre o Empreendimento</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance">
                Uma exclusividade entre rio e mar.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground/90">
                O Torres do Potengi nasce entre as principais avenidas do Panatis — Avenida Paulistana e a Avenida Maranguape — para redefinir o conceito de morar bem na Zona Norte de Natal.
              </p>
              <p>
                Com 18 pavimentos, o empreendimento é o mais alto da região e entrega uma vista privilegiada do rio Potengi e do mar. Apartamentos de 2 quartos, com plantas de 41 a 65m², projetados para quem busca qualidade de vida, segurança e potencial de valorização.
              </p>
              <p>
                Pensado como um verdadeiro condomínio clube, oferece lazer completo, entrada parcelada, possibilidade de uso do FGTS e financiamento pelo Minha Casa Minha Vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="bg-sand/60 py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow mb-5">Diferenciais</p>
            <h2 className="text-4xl md:text-5xl text-balance">O que torna este endereço único.</h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {differentials.map((d) => (
              <div key={d.title} className="group bg-background p-8 md:p-10 hover-lift">
                <d.icon className="h-7 w-7 text-bronze" strokeWidth={1.4} />
                <h3 className="mt-6 text-xl font-medium">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIFICAÇÕES */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12 md:gap-20 items-center">
            <div className="md:col-span-5">
              <p className="eyebrow mb-5">Especificações</p>
              <h2 className="text-4xl md:text-5xl text-balance">
                Projetado para o seu estilo de vida.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Cada metro quadrado pensado para entregar funcionalidade, conforto e elegância. Plantas inteligentes que aproveitam a luz natural e a vista privilegiada.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-3">
                {specs.map((s) => (
                  <div key={s.label} className="bg-background p-6 md:p-8 text-center">
                    <s.icon className="mx-auto h-6 w-6 text-bronze" strokeWidth={1.4} />
                    <div className="mt-4 text-2xl font-light">{s.value}</div>
                    <div className="mt-1 text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow mb-5">Vídeos</p>
            <h2 className="text-4xl md:text-5xl text-balance">Veja o empreendimento em movimento.</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col">
              <div className="relative w-full overflow-hidden bg-black shadow-card mx-auto" style={{ aspectRatio: "9 / 16", maxWidth: "420px" }}>
                <iframe
                  src="https://www.youtube.com/embed/dlG7r7nT6Go"
                  title="Torres do Potengi"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="bg-sand/60 py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow mb-5">Galeria</p>
              <h2 className="text-4xl md:text-5xl text-balance">Uma imersão visual no empreendimento.</h2>
            </div>
            <p className="text-sm text-muted-foreground">Clique nas imagens para ampliar</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((g, i) => (
              <button
                key={g.alt}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden bg-muted ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/5]" : "aspect-square"}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="zoom-img h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 text-xs tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {g.caption}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PLANTAS */}
      <section id="plantas" className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow mb-5">Plantas Disponíveis</p>
            <h2 className="text-4xl md:text-5xl text-balance">Opções pensadas para cada perfil.</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {plans.map((p, i) => (
              <div key={p.title} className="group flex flex-col">
                <button
                  onClick={() => setLightbox(gallery.length + i)}
                  className="block w-full overflow-hidden bg-sand shadow-card aspect-[4/3]"
                >
                  <img src={p.img} alt={p.title} loading="lazy" className="zoom-img h-full w-full object-contain bg-white" />
                </button>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-medium">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="shrink-0 border border-border px-4 py-3 text-center">
                    <div className="text-lg font-light whitespace-nowrap">{p.area}</div>
                    <div className="text-[0.6rem] tracking-[0.25em] uppercase text-muted-foreground mt-1">Privativa</div>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 border-t border-border pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAZER */}
      <section className="bg-primary text-primary-foreground py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs tracking-[0.28em] uppercase text-gold mb-5">Condomínio Clube</p>
            <h2 className="text-4xl md:text-5xl text-balance text-cream">Condomínio clube equipado.</h2>
            <p className="mt-6 text-primary-foreground/70 leading-relaxed">
              Diversos itens de lazer pensados para todas as idades, integrados a uma arquitetura paisagística sofisticada.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-primary-foreground/10 md:grid-cols-3 lg:grid-cols-3">
            {amenities.map((a) => (
              <div key={a.title} className="bg-primary p-7 md:p-8 flex items-center gap-4 hover:bg-primary-foreground/5 transition">
                <a.icon className="h-6 w-6 text-gold shrink-0" strokeWidth={1.4} />
                <span className="text-sm tracking-wide">{a.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="eyebrow mb-5">Localização</p>
              <h2 className="text-4xl md:text-5xl text-balance">No coração do Panatis.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                R. Limoeiro do Norte - Potengi, Natal - RN, 59108-230. Conectado às principais vias da cidade.
              </p>
              <ul className="mt-8 space-y-3">
                {locationPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-bronze mt-0.5 shrink-0" strokeWidth={1.6} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-7">
              <div className="aspect-[4/3] w-full overflow-hidden shadow-card border border-border">
                <iframe
                  title="Mapa Torres do Potengi"
                  src="https://www.google.com/maps?q=R.+Limoeiro+do+Norte,+Potengi,+Natal,+RN,+59108-230&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CONTATO */}
      <section id="contato" className="py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <div>
              <p className="eyebrow mb-5">Receba mais informações</p>
              <h2 className="text-4xl md:text-5xl text-balance">
                Garanta a melhor unidade <em className="italic font-light">disponível</em>.
              </h2>
              <p className="mt-6 text-foreground leading-relaxed font-bold">
                Nossa equipe entrará em contato para enviar mais informações e estudar a melhor condição de pagamento para você.
              </p>
              <div className="mt-10 space-y-4 text-sm">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-bronze transition">
                  <Phone className="h-4 w-4 text-bronze" strokeWidth={1.6} />
                  (84) 3234-3333
                </a>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-bronze transition">
                  <MessageCircle className="h-4 w-4 text-bronze" strokeWidth={1.6} />
                  WhatsApp — Atendimento imediato
                </a>
                <a href="https://www.instagram.com/aliancaimob" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-bronze transition">
                  <Instagram className="h-4 w-4 text-bronze" strokeWidth={1.6} />
                  @aliancaimob
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-bronze mt-0.5" strokeWidth={1.6} />
                  Av. Amintas Barros, 3054 - Lagoa Nova, Natal - RN, 59063-350
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Shield className="h-4 w-4 text-bronze mt-0.5" strokeWidth={1.6} />
                  CRECI: 1621-J — 17ª Região
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#1ebe57] transition"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2} />
                  Falar no WhatsApp
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.8} />
                  Solicitar Ligação
                </a>
              </div>
              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex items-start gap-8 flex-wrap">
                  <div>
                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground mb-3">Vendas</p>
                    <img src={aliancaLogoV2.url} alt="Aliança Imobiliária" className="h-28 md:h-32 w-auto" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground mb-3">Incorporação e Construção</p>
                    <img src={lsEngenharia.url} alt="LS Engenharia" className="h-28 md:h-32 w-auto" />
                  </div>
                </div>
              </div>


            </div>
            <div className="bg-card p-8 md:p-10 shadow-card border border-border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* MCMV */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs tracking-[0.28em] uppercase text-gold mb-5">Condições Facilitadas</p>
            <h2 className="text-3xl md:text-4xl text-cream text-balance">Financiamento pelo Minha Casa Minha Vida</h2>
            <p className="mt-5 text-primary-foreground/70 leading-relaxed">
              Entrada parcelada, uso do FGTS e taxas reduzidas. Realize o sonho do seu apartamento no endereço mais desejado da Zona Norte de Natal.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#1ebe57] transition"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Simular Financiamento
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 md:gap-10">
            <img
              src={mcmvLogo.url}
              alt="Minha Casa Minha Vida"
              className="h-14 md:h-20 w-auto object-scale-down"
            />
            <img
              src={caixaLogo.url}
              alt="Caixa Econômica Federal"
              className="h-10 md:h-14 w-auto object-scale-down"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/80 border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4">
                <img src={aliancaWhite.url} alt="Aliança Imobiliária" className="h-24 md:h-28 w-auto" />
                <div className="text-cream">
                  <div className="text-2xl md:text-3xl font-light tracking-wide">{"\n"}</div>
                  <div className="text-[0.7rem] tracking-[0.3em] uppercase text-cream/80">{"\n"}</div>
                </div>
              </div>
              <p className="mt-6 text-sm max-w-sm leading-relaxed">
                Aliança Imobiliária — corretora oficial do Residencial Torres do Potengi na Zona Norte de Natal.
              </p>
            </div>
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Contato</div>
              <ul className="space-y-2 text-sm">
                <li><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-cream transition">(84) 3234-3333</a></li>
                <li><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-cream transition">WhatsApp</a></li>
                <li>Av. Amintas Barros, 3054</li>
                <li>Lagoa Nova — Natal/RN, 59063-350</li>
              </ul>
            </div>
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Redes</div>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/aliancaimob" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-primary-foreground/20 p-2.5 hover:bg-primary-foreground/10 transition"><Instagram className="h-4 w-4" strokeWidth={1.6} /></a>
                <a href="https://www.facebook.com/alianca.imobiliaria" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="border border-primary-foreground/20 p-2.5 hover:bg-primary-foreground/10 transition"><Facebook className="h-4 w-4" strokeWidth={1.6} /></a>
              </div>
              <div className="mt-6 text-xs text-primary-foreground/50">CRECI: 1621-J — 17ª Região</div>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-wrap items-center justify-between gap-4 text-xs text-primary-foreground/50">
            <div>© {new Date().getFullYear()} Aliança Imobiliária. Todos os direitos reservados.</div>
            <div>Imagens meramente ilustrativas.</div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <Lightbox
        images={[...gallery, ...plans.map((p) => ({ src: p.img, alt: p.title, caption: `${p.title} — ${p.area}` }))]}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onPrev={() => setLightbox((i) => (i === null ? null : (i - 1 + gallery.length + plans.length) % (gallery.length + plans.length)))}
        onNext={() => setLightbox((i) => (i === null ? null : (i + 1) % (gallery.length + plans.length)))}
      />
    </div>
  );
}

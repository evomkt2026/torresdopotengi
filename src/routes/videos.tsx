import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import torresLogo from "@/assets/logos/torres.png.asset.json";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vídeos — Torres do Potengi" },
      { name: "description", content: "Assista aos vídeos do Residencial Torres do Potengi e conheça o empreendimento mais alto da Zona Norte de Natal." },
      { property: "og:title", content: "Vídeos — Torres do Potengi" },
      { property: "og:description", content: "Assista aos vídeos do Residencial Torres do Potengi." },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: VideosPage,
});

const videos = [
  {
    id: "dlG7r7nT6Go",
    title: "Torres do Potengi",
    description: "Conheça o empreendimento mais alto da Zona Norte de Natal.",
  },
];

function VideosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-1">
          <Link to="/" className="flex items-center">
            <img src={torresLogo.url} alt="Residencial Torres do Potengi" className="h-32 md:h-40 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex items-center gap-9 text-sm tracking-wide text-muted-foreground font-bold">
            <Link to="/" hash="sobre" className="hover:text-foreground transition">Sobre</Link>
            <Link to="/" hash="diferenciais" className="hover:text-foreground transition">Diferenciais</Link>
            <Link to="/" hash="galeria" className="hover:text-foreground transition">Galeria</Link>
            <Link to="/" hash="plantas" className="hover:text-foreground transition">Plantas</Link>
            <Link to="/videos" className="text-foreground transition">Vídeos</Link>
            <Link to="/" hash="localizacao" className="hover:text-foreground transition">Localização</Link>
          </nav>
          <Link to="/" hash="contato" className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition">
            Quero saber mais
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-24 md:pt-40 md:pb-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 flex items-center justify-between gap-6">
            <div>
              <p className="eyebrow mb-5">Vídeos</p>
              <h1 className="text-4xl md:text-5xl text-balance">Veja o empreendimento em movimento.</h1>
            </div>
            <Link to="/" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              <ArrowLeft className="h-4 w-4" /> Voltar
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {videos.map((v) => (
              <div key={v.id} className="flex flex-col">
                <div className="relative w-full overflow-hidden bg-black shadow-card" style={{ aspectRatio: "9 / 16", maxHeight: "80vh" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <h2 className="mt-6 text-2xl font-medium">{v.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

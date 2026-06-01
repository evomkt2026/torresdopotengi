import { MessageCircle } from "lucide-react";

export const WHATSAPP_NUMBER = "5584999999999";
export const WHATSAPP_MESSAGE = "Olá! Tenho interesse no Torres do Potengi e gostaria de receber mais informações.";

export function whatsappUrl(extra?: string) {
  const msg = extra ? `${WHATSAPP_MESSAGE} ${extra}` : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-300 hover:scale-110 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}

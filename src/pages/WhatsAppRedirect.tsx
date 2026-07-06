import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Vim pelo site e gostaria de solicitar um orçamento.";

const WhatsAppRedirect = () => {
  useEffect(() => {
    // Dispara evento no dataLayer antes de redirecionar
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "whatsapp_click",
        event_category: "lead",
        event_label: "whatsapp_page_redirect",
      });
    }

    // Pequeno delay para o GTM capturar o evento antes do redirect
    const timer = setTimeout(() => {
      window.location.href = WHATSAPP_LINK;
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>WhatsApp | Reparo Avançado Salvador</title>
        <meta name="description" content="Fale agora pelo WhatsApp com a Reparo Avançado em Salvador. Orçamento gratuito e atendimento imediato." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/whatsapp" />
        <meta property="og:title" content="WhatsApp | Reparo Avançado Salvador" />
        <meta property="og:description" content="Fale agora pelo WhatsApp com a Reparo Avançado em Salvador." />
        <meta property="og:url" content="https://site.reparoavancado.com.br/whatsapp" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-16 h-16 border-4 border-whatsapp border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Redirecionando para o WhatsApp...</h1>
          <p className="text-muted-foreground text-sm mb-6">Aguarde, estamos abrindo o chat.</p>
          <a
            href={WHATSAPP_LINK}
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
          >
            Clique aqui se não redirecionar
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppRedirect;

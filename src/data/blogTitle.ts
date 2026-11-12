// Título do documento (<title>) dos posts do blog.
// Regra: sufixo curto " | Reparo Avançado" só quando o total fica <= 60 caracteres;
// caso contrário, sem sufixo. O prerender e o React usam esta mesma função,
// então o <title> estático e o hidratado ficam iguais.

export const BLOG_TITLE_SUFFIX = " | Reparo Avançado";
export const BLOG_TITLE_MAX = 60;

// Páginas que não entram na regra nova (lista A e Lotes 5/6, em medição):
// mantêm exatamente o comportamento anterior (estático = título puro;
// hidratado = título + " | Avaliação Grátis").
const LEGACY_SUFFIX = " | Avaliação Grátis";
const FROZEN_SLUGS = new Set<string>([
  // lista A
  "xiaomi-desligou-do-nada-e-nao-liga-mais",
  "celular-apagou-do-nada-e-nao-liga-mais",
  "aviso-umidade-detectada",
  "xiaomi-redmi-tela-manchada-linhas-coloridas",
  "motorola-travando-reiniciando-sozinho-loop",
  "samsung-reiniciando-sozinho-logo",
  "mancha-roxa-tela-samsung-crescendo",
  "xiaomi-atualizacao-miui-travou-nao-liga",
  "botao-power-samsung-parou-de-funcionar",
  "motorola-edge-nao-liga-boca-do-rio",
  "assistencia-tecnica-realme-salvador",
  "assistencia-tecnica-especializada-xiaomi-salvador",
  // Lote 5
  "por-que-iphone-13-esquenta-muito",
  "celular-carrega-mas-nao-liga-causas",
  "celular-sem-sinal-nao-reconhece-chip",
  "iphone-11-nao-carrega-conector-ou-bateria",
  "conserto-botao-power-volume-celular-salvador",
  // Lote 6
  "samsung-desligou-do-nada-e-nao-liga-mais",
  "motorola-desligou-do-nada-e-nao-liga-mais",
  "iphone-desligou-do-nada-e-nao-liga-mais",
  "celular-xiaomi-nao-liga-o-que-fazer",
  "diferenca-tela-original-primeira-linha",
  "celular-tela-touch-nao-responde-partes",
  "conector-carga-iphone-mau-contato-limpeza-troca",
]);

export function getBlogTitles(slug: string, title: string): { prerender: string; hydrated: string } {
  if (FROZEN_SLUGS.has(slug)) {
    return { prerender: title, hydrated: `${title}${LEGACY_SUFFIX}` };
  }
  const withSuffix = `${title}${BLOG_TITLE_SUFFIX}`;
  const final = withSuffix.length <= BLOG_TITLE_MAX ? withSuffix : title;
  return { prerender: final, hydrated: final };
}

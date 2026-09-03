export const BUSINESS_HOURS = {
  weekdays: "Segunda a Sexta: 8h às 18h",
  saturday: "Sábado: 8h às 17h",
  sunday: "Domingo: Fechado",
  short: "Seg a Sex: 8h-18h | Sáb: 8h-17h",
  schema: {
    weekdays: { opens: "08:00", closes: "18:00" },
    saturday: { opens: "08:00", closes: "17:00" },
  },
  openStreetMap: "Mo-Fr 08:00-18:00, Sa 08:00-17:00",
};

export const BRAND_DISPLAY_NAMES: Record<string, string> = {
  iphone: "iPhone",
  apple: "Apple",
  samsung: "Samsung",
  xiaomi: "Xiaomi",
  motorola: "Motorola",
  realme: "realme",
  notebooks: "Notebooks",
  conserto: "Conserto",
};

export function getBrandDisplayName(raw: string): string {
  const lower = raw.toLowerCase();
  return BRAND_DISPLAY_NAMES[lower] || raw;
}


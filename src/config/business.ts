export const businessInfo = {
  name: "Reparo Avançado",
  streetAddress: "R. Abelardo Andrade de Carvalho, 8",
  addressLocality: "Boca do Rio",
  city: "Salvador",
  state: "BA",
  postalCode: "41706-710",
  addressCountry: "BR",
  telephone: "(71) 99198-1437",
  whatsapp: "5571991981437",
  hoursDisplay: "Seg a Sex 8h–18h · Sáb 8h–17h · Dom fechado",
  url: "https://site.reparoavancado.com.br/",
  experience: "desde 2018",
  warranty: "90 dias (3 meses)",
  geo: {
    latitude: -12.9777,
    longitude: -38.4413
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  socials: [
    "https://instagram.com/reparoavancadosalvador",
    "https://facebook.com/reparoavancadosalvador"
  ],
  areaServed: ["Boca do Rio", "Imbuí", "Pituba", "Brotas", "Costa Azul", "Stiep", "Caminho das Árvores", "Itaigara", "Rio Vermelho", "Patamares", "Piatã", "Itapuã", "Cabula", "Salvador"]
};

import React from "react";

const TickerSection = () => {
  const items = [
    "TROCA DE TELA IPHONE",
    "SAMSUNG",
    "XIAOMI",
    "ENTREGA EM 2H",
    "LEVA E TRAZ GRÁTIS",
    "SALVADOR BA"
  ];

  // Join them with bullets, then we will render this entire block multiple times to ensure the loop is seamless.
  const block = (
    <div className="flex items-center shrink-0">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="mx-6 text-sm font-bold tracking-[0.15em] whitespace-nowrap">
            {item}
          </span>
          <span className="text-white/50 text-xs">●</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-blue-600 text-white overflow-hidden py-2.5 border-b border-blue-700 relative z-10 flex">
      <div className="flex w-max animate-ticker-right">
        {/* Render enough blocks to guarantee it spans more than 200vw so the 50% translation is smooth */}
        {block}
        {block}
        {block}
        {block}
        {block}
        {block}
        {block}
        {block}
      </div>
    </div>
  );
};

export default TickerSection;

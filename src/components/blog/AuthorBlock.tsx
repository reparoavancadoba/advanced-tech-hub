import { Clock } from "lucide-react";

interface AuthorBlockProps {
  authorName?: string;
  datePublished?: string;
  dateModified?: string;
  readingTime?: number;
}

const AuthorBlock = ({ 
  authorName = "Equipe Reparo Avançado", 
  datePublished = "01/06/2026", 
  dateModified = "05/06/2026",
  readingTime = 3
}: AuthorBlockProps) => {
  return (
    <div className="flex flex-col gap-4 py-6 border-y border-white/10 mb-8 mt-2 bg-zinc-900/30 px-6 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 overflow-hidden">
          {/* Pode ser substituído por uma foto real do técnico depois */}
          <span className="text-xl font-bold text-blue-400">RA</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-white text-base md:text-lg">{authorName}</span>
          <span className="text-zinc-400 text-sm">
            Técnico especializado em microeletrônica de placas e dispositivos móveis, com mais de 7 anos de experiência.
          </span>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500 pt-2 border-t border-white/5">
        <div className="flex items-center gap-1">
          <span>Publicado:</span>
          <span className="font-medium text-zinc-300">{datePublished}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block" />
        <div className="flex items-center gap-1">
          <span>Atualizado:</span>
          <span className="font-medium text-zinc-300">{dateModified}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block" />
        <div className="flex items-center gap-1 text-blue-400 font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span>Tempo de leitura: {readingTime} min</span>
        </div>
      </div>
    </div>
  );
};

export default AuthorBlock;

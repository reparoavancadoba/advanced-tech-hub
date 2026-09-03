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
    <div className="flex items-center gap-2 py-4 text-zinc-500 text-sm border-b border-zinc-200 mb-6">
      <span className="font-bold text-zinc-800">Por {authorName}</span>
      <span className="text-zinc-300">•</span>
      <div className="flex items-center gap-1.5">
        <Clock className="w-4 h-4" />
        <span>{datePublished}</span>
      </div>
      {dateModified && dateModified !== datePublished && (
        <>
          <span className="text-zinc-300 hidden sm:inline">•</span>
          <span className="hidden sm:inline italic">Atualizado em {dateModified}</span>
        </>
      )}
      <span className="text-zinc-300">•</span>
      <span>{readingTime} min de leitura</span>
    </div>
  );
};

export default AuthorBlock;


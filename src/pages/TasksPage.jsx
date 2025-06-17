import { ChevronLeft, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();

  const [isBackHovered, setIsBackHovered] = useState(false);

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") 
  const description = searchParams.get("description")

  return (
    <div className="h-screen justify-center p-6 max-w-2xl mx-auto text-white">

      <div className="flex items-center border-b border-neutral-200">

        <button 
          onClick={() => navigate(-1)}
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
          title="Voltar"
          className="flex items-center uppercase text-xs p-2 font-medium transition hover:-translate-x-1">
          {isBackHovered ? (
            <ArrowLeft className="text-slate-800 w-4" />
          ) : (
            <ChevronLeft className="text-slate-800 w-4" />
          )}
        </button>

        <h1 className="flex-1 text-slate-800 text-xs text-center uppercase font-semibold leading-6 ">Detalhes da tarefa</h1>
      </div>

      <div className="mt-2 space-y-4">
        <div className="break-words whitespace-normal">
          <span className="text-xs uppercase font-bold tracking-wide text-neutral-400">Título:</span>
          <h1 className="text-2xl font-semibold text-slate-800">{title}</h1>
        </div>

        <div className="break-words whitespace-normal">
          <span className="text-xs uppercase font-bold tracking-wide text-neutral-400">Descrição:</span>
          <p className="text-sm text-neutral-600">{description}</p>
        </div>
      </div>

    </div>
  );
}

export default TaskPage;
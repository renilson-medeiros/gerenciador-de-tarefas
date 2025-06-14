import { ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") 
  const description = searchParams.get("description")

  return (
    <div className="h-screen justify-center p-6 max-w-2xl mx-auto text-white">
      <div className="flex border-b border-zinc-900 pb-2">

        <button 
          onClick={() => navigate(-1)}
          className="flex items-center uppercase text-xs p-2 font-medium bg-purple-600 hover:bg-purple-800 rounded transition">
          <ArrowLeft size={16} />
        </button>

        <h1 className="flex-1 text-white text-xs text-center uppercase font-semibold leading-6 ">Detalhes da tarefa</h1>
      </div>
      <div className="mt-2 space-y-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-wide text-zinc-500">Título:</span>
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
        <div>
          <span className="text-xs uppercase font-bold tracking-wide text-zinc-500">Descrição:</span>
          <p className="text-sm text-zinc-200">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
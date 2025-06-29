import { Trash, Eye } from "lucide-react"
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskCompleted, onTaskDeleted }) {
    const navigate = useNavigate();

    function onTaskDescription(taskId) {
        const query = new URLSearchParams();
        query.set('id', taskId);
        query.set('title', tasks.find(task => task.id === taskId).title);
        query.set('description', tasks.find(task => task.id === taskId).description);
        navigate(`/tasks?${query.toString()}`);
    }

    return (
        <div className="w-full py-6">
            {tasks.length === 0 ? (
                <p className="text-center text-neutral-500 bg-neutral-100 text-xs font-medium uppercase p-4 tracking-wide rounded">Nenhuma tarefa adicionada</p>
            ) : (
                <ul className="space-y-2">
                    <h2 className="text-slate-800 text-xs uppercase font-semibold leading-6 border-b border-neutral-200">Tarefas</h2>
                    {tasks.map((task, index) => (
                        <div className="flex gap-2 justify-between items-center" key={task.id}>
                            
                            <button
                                key={task.id}
                                title={task.title}
                                onClick={() => onTaskCompleted(task.id)}
                                className={`p-3 text-neutral-600 text-left rounded w-full cursor-pointer transition truncate  ${
                                    index % 2 === 0 ? 'bg-neutral-100 hover:bg-neutral-200' : 'bg-neutral-200 hover:bg-neutral-300'
                                }`
                                + (task.completed ? ' line-through text-gray-500 opacity-50' : ' text-gray-800')}
                            >
                                {task.title}
                            </button>

                            <button 
                                disabled={task.completed}
                                title="Ver detalhes da tarefa"
                                onClick={() => onTaskDescription(task.id)}
                                className={`p-4 text-neutral-600 rounded cursor-pointer transition ${
                                    index % 2 === 0 ? 'bg-neutral-100 hover:bg-neutral-200' : 'bg-neutral-200 hover:bg-neutral-300'
                                }` 
                                + (task.completed ? ' text-gray-500 opacity-50' : ' text-gray-800')}>
                                    <Eye size={16} />
                            </button>

                            <button
                                onClick={() => onTaskDeleted(task.id)}
                                disabled={task.completed}
                                title="Excluir tarefa"
                                className={'p-4 rounded text-white hover:text-red-900 cursor-pointer hover:bg-red-500 hover:fill-white transition bg-red-500' 
                                + (task.completed ? ' text-gray-500 opacity-50' : ' opacity-100')}>
                                    <Trash size={16} />
                            </button>
                            
                        </div>
                    ))}
                </ul>
            )}
        </div>

    )

}

export default Tasks
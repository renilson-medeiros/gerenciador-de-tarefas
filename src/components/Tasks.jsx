import { Trash, Eye } from "lucide-react"

function Tasks({ tasks, onTaskCompleted, onTaskDeleted }) {

    return (
        <div className="w-full py-6">
            {tasks.length === 0 ? (
                <p className="text-center text-zinc-500 bg-zinc-900 text-xs font-medium uppercase p-4 tracking-wide rounded">Nenhuma tarefa adicionada</p>
            ) : (
                <ul className="space-y-2">
                    <h2 className="text-white text-xs uppercase font-semibold leading-6 border-b border-zinc-900">Tarefas</h2>
                    {tasks.map((task, index) => (
                        <div className="flex gap-2 justify-between items-center" key={task.id}>
                            <button
                                key={task.id}
                                onClick={() => onTaskCompleted(task.id)}
                                className={`p-3 text-zinc-50 text-left rounded w-full cursor-pointer transition ${
                                    index % 2 === 0 ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-900 hover:text-zinc-400'
                                }`
                                + (task.completed ? ' line-through text-gray-500 opacity-50' : ' text-gray-800')}
                            >
                                {task.title}
                            </button>

                            <button 
                                disabled={task.completed}
                                className={`p-4 text-zinc-50 rounded cursor-pointer transition ${
                                    index % 2 === 0 ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-900 hover:text-zinc-400'
                                }` 
                                + (task.completed ? ' text-gray-500 opacity-50' : ' text-gray-800')}>
                                    <Eye size={16} />
                            </button>

                            <button
                                onClick={() => onTaskDeleted(task.id)}
                                disabled={task.completed}
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
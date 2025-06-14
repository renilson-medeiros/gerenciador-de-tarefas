import Input from '../components/form/Input';
import { useState } from 'react';

function AddTask({ onTaskAdded }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="w-full space-y-2 p-4 mb-6 bg-zinc-800 rounded">
            <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Digite o titulo da tarefa"
            />

            <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Digite a descrição da tarefa"
            />

            <button
                onClick={() => {
                    if (title.trim() && description.trim()) {
                        onTaskAdded(title, description);
                        setTitle("");
                        setDescription("");
                    }
                }}
                className='bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors duration-300 text-white w-full p-2 rounded'>
                Adicionar Tarefa
            </button>
        </div>
    )

}

export default AddTask
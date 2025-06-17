import Input from '../components/form/Input';
import { useState } from 'react';

function AddTask({ onTaskAdded }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Tratamento de erros
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const handleAddTask = () => {
        const isTitleValid = title.trim() !== "";
        const isDescriptionValid = description.trim() !== "";

        setTitleError(!isTitleValid);
        setDescriptionError(!isDescriptionValid);

        if (isTitleValid && isDescriptionValid) {
            onTaskAdded(title, description);
            setTitle("");
            setDescription("");
            setTitleError(false);
            setDescriptionError(false);
        }
    }

    return (
        <div className="w-full space-y-2 p-4 mb-6 bg-slate-50 border border-slate-100 rounded">
            <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Digite o titulo da tarefa"
                error={titleError}
                errorMessage="O título não pode estar vazio"
            />

            <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Digite a descrição da tarefa"
                error={descriptionError}
                errorMessage="A descrição não pode estar vazia"
            />

            <button
                onClick={handleAddTask}
                className='bg-neutral-950 font-medium hover:bg-neutral-800 cursor-pointer transition-colors duration-300 text-white w-full p-2 rounded'>
                Adicionar Tarefa
            </button>
        </div>
    )

}

export default AddTask
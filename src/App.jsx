import './App.css'
import { useEffect, useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  , [tasks])

  function onTaskCompleted(TaskId) {
    const updatedTasks = tasks.map(task => {
      if (task.id === TaskId) {
        return { ...task, completed: !task.completed }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function onTaskDeleted(TaskId) {
    const updatedTasks = tasks.filter(task => task.id !== TaskId)

    setTasks(updatedTasks)
  }

  function onTaskAdded(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  return (
      <div className='h-screen justify-center p-6 max-w-2xl mx-auto text-white'>
        <header className='w-full p-4 flex justify-center items-center mb-6'>
          <h1 className='text-3xl text-slate-900 font-bold'>Gerenciador de Tarefas</h1>
        </header>

        <main>

          <AddTask
            onTaskAdded={onTaskAdded}
          />

          <Tasks
            tasks={tasks} 
            onTaskCompleted={onTaskCompleted}
            onTaskDeleted={onTaskDeleted}
          />
        </main>
      </div>
  )
}

export default App

import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskPage from './pages/TasksPage.jsx'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App /> 
  },
  {
    path: '/tasks',
    element: <TaskPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

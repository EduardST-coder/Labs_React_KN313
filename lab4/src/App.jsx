import { TodoList } from './components/todo-list'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          My Todo Application
        </h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from '../pages/Home'
// import HomePage from '../pages/HomePage'
import List from 'rick_morty_remote/List'
import Input from 'rick_morty_remote/Input'
import './App.scss'

function App() {
  interface Todo {
    text: string
  }

  const [newTodo, setNewTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const onSubmit = () => {
    setTodos((prev) => [...prev, { text: newTodo }])
    setNewTodo('')
  }
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes> */}
      <Input value={newTodo} onChange={setNewTodo} onSubmit={onSubmit} />
      <List items={todos} />
    </>
  )
}

export default App

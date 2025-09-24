import { useState } from "react"
export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("")
  const submit = (e) => { e.preventDefault(); onAdd(text); setText("") }
  return (
    <form className="row" onSubmit={submit}>
      <input type="text" placeholder="Add a task" value={text}
             onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}

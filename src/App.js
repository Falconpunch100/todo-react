import Input from "./Input.js"
import './App.css';
import { useEffect, useState } from "react"
import TodoList from "./TodoList.js"

let idCounter = 1;
function App() {
  let [list, setList] = useState([])

  function addTodo(todoText) {
    if (todoText !== "") {
      let copy = list.slice()
      copy.push({ id: idCounter++, text: todoText, completed: false })
      setList(copy)
    }
    else {
      alert("You must input something to add to the list.")
    }
  }
  function toggleCompleted(id) {
    let copy = list.slice()
    for (let i = 0; i < copy.length; i++) {
      const element = copy[i];
      if (element.id === id) {
        element.completed = !element.completed;
      }
    }
    setList(copy)
  }

  function deleteTodo(id) {
    let copy = list.slice()
    let foundIndex;
    for (let i = 0; i < copy.length; i++) {
      const element = copy[i];
      if (element.id === id) {
        foundIndex = i
      }
    }
    console.log(foundIndex)
    copy.splice(foundIndex, 1)
    setList(copy)
  }

  return (
    <main className="App">
      <Input addTodo={addTodo}></Input>
      <section>
        <TodoList list={list} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}></TodoList>
      </section>
    </main>
  );
}

export default App;

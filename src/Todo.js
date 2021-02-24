import './Todo.css';

function Todo({todo, toggleCompleted, deleteTodo}) {
    let cssStyles = {
        textDecoration: todo.completed === true ? "line-through" : "none"
    }
    return (
        <div>
        <li style={cssStyles} className="todopiece" onClick={(e) => {toggleCompleted(todo.id)}}>{todo.text}</li>
        <span onClick={(e) => {deleteTodo(todo.id)}}>&#10060;</span>
        </div>
    )
}

export default Todo;
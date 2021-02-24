import Todo from "./Todo.js"

function TodoList({list, toggleCompleted, deleteTodo}) {
    return (
        <div>
            {list.map((todo) => {
                return (<Todo todo={todo} toggleCompleted={toggleCompleted} key={todo.id} deleteTodo={deleteTodo}></Todo>)
            })}
            
        </div>
    )
}


export default TodoList;
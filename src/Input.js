import { useState } from "react";

function Input({addTodo}) {
    let [text, setText] = useState("");

    return (
        <section>
            <form onSubmit={(e) => {
                e.preventDefault()
                addTodo(text)}}>
                <input type="text" placeholder="What's on your mind?" value={text} onChange={(e) => {setText(e.target.value)}}></input>
                <button type="submit">Add to List</button>
            </form>
        </section>
    )
}

export default Input;
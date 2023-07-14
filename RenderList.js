import { useState } from "react";

function RenderList() {
    const [ todo, setTodo ] = useState(['todo 1', 'todo 2', 'todo 3', 'todo 4']);

    return(
        <ul>
            {
                todo.map((todo) => <li>{todo}</li>)
            }

            <button onClick={() => setTodo([...todo, 'todo 5'])}>Click</button>
        </ul>
    )
}

export default RenderList;
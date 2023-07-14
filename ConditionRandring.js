import { useState } from "react";

function ConditionRandering() {
    const [ isEditing, setIsEditing ] = useState(false);

    return(
        <>{
            isEditing ? <input /> : <h1>Add To Do</h1>
          }
            <button onClick={() => setIsEditing(!isEditing)}>Click</button>
        </>
    )
}

export default ConditionRandering;
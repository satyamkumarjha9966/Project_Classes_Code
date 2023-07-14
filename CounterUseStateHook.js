import { useState } from 'react';

let Z = 0;
function Counter() {

    const [X, setX] = useState(0);

    const [Y, setY] = useState(0);

    return(
        <>
            Count X : {X}
            <button onClick={() => setX(X+1)} >Inc</button>
            <button onClick={() => setX(X-1)} >Dec</button>
            <br />
            Count Y : {Y}
            <button onClick={() => setY(Y+1)}>Inc</button>
            <button onClick={() => setY(Y-1)}>Inc</button>

            Count Z : {Z}
            <button onClick={(Z) => Z+=1}>Inc</button>

        </>
    );
}

export default Counter;
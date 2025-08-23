import React, { useEffect, useState } from "react";

function MyComp2() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(function, [dependencies]);

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // });

    useEffect(() => {
        document.title = `My Counter: ${count} ${color}`;
    }, [count, color]);

    function addCount() {
        setCount (c => c + 1);
    }

    function subtractCount() {
        setCount (c => c - 1);
    }

    function changeColor() {
        setColor (c => c === "green" ? "green" : "red");
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <br />
            <br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default MyComp2;
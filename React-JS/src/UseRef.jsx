import React, {useState, useEffect, useRef} from 'react';

function UseRef() {

    // let [number, setNumber] = useState(0);
    const ref = useRef(0);

    useEffect(() => {
        console.log("Comp Rendered");
    })

    function handleClick() {
        // ref.current = ref.current + 1;
        ref.current++;
        // console.log(ref.current);
        
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    )
}

export default UseRef;
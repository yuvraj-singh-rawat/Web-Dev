
function Button () {

    let count = 0;

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time's`);
        } else {
            console.log(`${name} stop clicking me!`);
            
        }
    }

    const handleClick1 = () => console.log("Added to Cart!");

    const handleClick2 = (name) => console.log(`${name} Stop Clicking Me`);

    return (
        <button onClick={() => handleClick("Bro")} style={styles}>Add to Cart</button>
    );
}

export default Button;
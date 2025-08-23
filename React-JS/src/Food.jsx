function Food() {
    const food1 = "South Indian Foods";
    const food2 = "Gujarati Foods";

    return (
        <ul>
            <h3>Available Food Items</h3>
            <li>North Indian Food Items</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food;
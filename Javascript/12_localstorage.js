function saveData() {
    let name = document.getElementById("nameInput").value;
    let age = document.getElementById("ageInput").value;

    // convert to object
    let user = {
        name: name,
        age: age
    };

    localStorage.setItem("userData", JSON.stringify(user));
    alert("Data saved to localStorage!");
}

function loadData() {
    let stored = localStorage.getItem("userData");

    if (stored) {
        let user = JSON.parse(stored);
        document.getElementById("output").innerText =
            `Name: ${user.name}, Age: ${user.age}`;
    } else {
        document.getElementById("output").innerText = "No data found!";
    }
}

function clearData() {
    localStorage.removeItem("userData");
    document.getElementById("output").innerText = "Data cleared!";
}
const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000;

// Middleware - Plugin
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n ${Date.now()}: ${req.ip} ${req.method} : ${req.path}`, (err, data) => {
        next();
    })
});




// Routes
app.get('/api/users', (req, res) => {
    return res.json(users);
});

// app.get('/users', (req, res) => {
//     const html = `
//     <ul>
//     ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// });

// User with ID's

app 
    .route("/api/users/:id")
    .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
    })
    .patch((req, res) => {
        // Edit user with ID
        return res.json({status: "pending"});
    })
    .delete((req, res) => {
        // Delete user with ID
        return res.json({status: "pending"});
    })

// POST Requests

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "pending"});
    });
})

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
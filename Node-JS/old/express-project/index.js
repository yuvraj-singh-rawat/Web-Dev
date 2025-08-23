let express = require("express") // third party module
require("dotenv").config()
const { checkToken } = require("./checkTokenMiddleware")

let app = express()

console.log(process.env.myToken);

app.use(express.json())
// let myToken = "12345";

// let myPass = "12345";

// let checkToken = (req, res, next) => {
//     console.log(req.query.token);
//     if (req.query.token == "" || req.query.token == undefined) {
//         return res.send(
//             {
//                 status: 0,
//                 msg: "please fill the token"
//             }
//         )
//     }

//     if (req.query.token != myToken) {
//         return res.send(
//             {
//                 status: 0,
//                 msg: "please fill the correct token"
//             }
//         )
//     }
//     next();
// }

// app.use(checkToken) // Middleware

// app.use((req, res, next) => {
//     if (req.query.pass == "" || req.query.pass == undefined) {
//         return res.send({
//             status: 0,
//             msg: "please fill the Password"
//         })
//     }

//     if (req.query.pass != myPass) {
//         return res.send({
//             status: 0,
//             msg: "please fill the correct password"
//         })
//     }
//     next();
// })

// creating route using express

// get method supports direct browser
app.get("/", checkToken, (req, res) => {
    res.send({ status: 1, msg: "Home Page API" })
})

app.get("/news", checkToken, (req, res) => {
    res.send({ status: 1, msg: "News Api" })
})

// :id = dynamic params
app.get("/news/:id", (req, res) => {
    let currentId = req.params.id
    res.send("News Details API: " + currentId)
})

app.get("/products", (req, res) => {
    res.send({ status: 1, msg: "Product API" })
})


app.post("/login", (req, res) => {
    console.log(req.body); // object (key, value)

    res.status(200).json({
        status: 1,
        msg: "Login API",
        data: req.body,
        queryData: req.query
    })

    // another way for response

    // res.send(
    //     {
    //         status: 1, 
    //         msg: "Login API", 
    //         data: req.body,
    //         queryData: req.query
    //     }
    // )
})

app.listen(process.env.PORT || 5000)
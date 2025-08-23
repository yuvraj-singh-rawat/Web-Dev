import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/api/v1/user/register", (req, res) => {
    const obj = req.body;
    console.log(obj);

    res.status(200).json({
        success: true,
        message: "Account created Successfully"
    })
})


app.post("/api/v1/user/login", (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);

    res.status(200).json({
        success: true,
        message: "Login Successfully"
    })
})

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
});














// // Logger Middleware Function
// function logger(req, res, next) {
//     console.log(`${req.method} ${req.url}`);
//     next();
// }

// app.use(logger); // use middleware globally

// app.get('/', (req, res) => {
//     res.send('Home Page');
// });

// app.listen(8000, () => console.log('Server Running at 8000'));
let express = require("express")
const { dbConnection } = require("./dbConnection")
let app = express()

app.use(express.json())

app.get("/student-read", async (req, res) => {
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students")
    let data = await studentCollection.find().toArray();

    let resObj = {
        status: 1,
        msg: "Student List",
        data
    }
    res.send(resObj)
})

app.post("/student-insert", async (req, res) => {
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students")

    // let obj = {
    //     sName: req.body.sName,
    //     sEmail: req.body.sEmail,
    // }

    // another way using Destructuring
    let { sName, sEmail } = req.body;

    let obj = { sName, sEmail };

    let checkEmail = await studentCollection.findOne({sEmail})
    if (checkEmail) {
        return res.send({status: 0, msg:"Email id already exist.."})
    }

    let insertRes = await studentCollection.insertOne(obj)

    let resObj = {
        status: 1,
        msg: "Data inserted",
        insertRes
    }
    res.send(resObj)
})

// dynamic optional parameter
app.delete("/student-delete/:id", async (req, res) => {
    let { id } = req.params; // {id: 687b99b17bcd60e78fff43cc}
    // id: 687b9a027bcd60e78fff43cd
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students")
    let delRes = await studentCollection.deleteOne({ _id: new ObjectId(id) })
    let resObj = {
        status: 1,
        msg: "Data Delete",
        delRes
    }
    res.send(resObj)
})


app.put("/student-update/:id", async (req, res) => {
    let { id } = req.params;
    let { sName, sEmail } = req.body;

    let obj = {  }; // data

    if (sName !== "" && sName !== undefined && sName !== null) {
        obj['sName'] == sName
    }

    if (sEmail !== "" && sEmail !== undefined && sEmail !== null) {
        obj['sEmail'] == sEmail
    }

    console.log(obj);
    

    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students")
    let updateRes = await studentCollection.updateOne({_id: new ObjectId(id)}, {$set: {obj}})
    let resObj = {
        status: 1,
        msg: "Data Update",
        updateRes
    }
    res.send(updateRes)
})

app.listen("8000");
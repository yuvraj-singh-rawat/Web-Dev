let express = require('express');
let mongoose = require('mongoose');


const { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate } = require('./App/controllers/web/userEnquiryController');
const enquiryRoutes = require('./App/routes/web/enquiryRoutes');
require('dotenv').config();


//connect to MongoDB

let app = express();

app.use(express.json());

app.use("/web/api/enquiry", enquiryRoutes)

// https://localhost:8000/web/api/enquiry/enquiry-insert

mongoose.connect(process.env.DBURL).then(() => {
    console.log("connected to Mongoose");
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port" + process.env.PORT);
    });
})

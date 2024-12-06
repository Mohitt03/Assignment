import express from "express";
import route from "./routes/bookRoute.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();
import mongoose from "mongoose";
const app = express();
const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());
mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true })

.then(()=>{
    console.log("DB connected successfully!");
    app.listen(PORT,()=>{
        console.log(`server is running on port http://localhost:${PORT}`);
    });

})
.catch(error => console.log(error));
app.use("/api",route)

//first we have to get connect with database and then connect to sever. if there is any error .catch will handle the error
//.then will specify 
import express from 'express';
import {createbook , deletebook, getAllBook,getOneBook,updatebook} from "../controllers/bookController.js";
const route =express.Router();
route.post("/create",createbook);
route.get("/getAll",getAllBook);
route.get("/getone/:id",getOneBook);
route.put("/update/:id",updatebook);
route.delete("/delete/:id",deletebook);
export default route;

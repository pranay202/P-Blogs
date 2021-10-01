import  express  from "express";

//Database
import Connection from "./database/db.js";

const app = express();

app.listen(5000, () => {
    console.log("Server is running successfully on port 5000");
});

Connection();
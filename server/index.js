import  express  from "express";
import cors from "cors";
import bodyParser from "body-parser";

//Database
import Connection from "./database/db.js";
//Router
import Router from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Router);

app.listen(5000, () => {
    console.log("Server is running successfully on port 5000");
});

Connection();
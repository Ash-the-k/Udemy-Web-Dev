//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = fileURLToPath(dirname(import.meta.url));

var isAuthorized = false;

function authorize(req, res, next){
    if (req.body.password === "ILoveProgramming") {
        isAuthorized = true;
    }
    next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(authorize);

// app.post("/check", (req, res, next) => {
//     if (req.body.password === "ILoveProgramming") {
//         res.sendFile(__dirname + "/public/secret.html")
//     }   else res.sendFile(__dirname + "/public/index.html");
// })

app.post("/check", (req, res) => {
    if (isAuthorized) {
        res.sendFile(__dirname + "/public/secret.html")
    }   else    res.redirect("/");
        // res.sendFile(__dirname + "/public/index.html");
})


app.get("/", (req, res) => {
    // res.send("Hello");
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(port, () =>{
    console.log(`Server running at ${port}`);
})
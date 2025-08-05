import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Welcome</h1>");
})

app.get("/contact", (req, res) => {
    res.send(`
        <h1>CONTACT</h1>
        <p><b>Phone No: </b> XXXX XXXX XX</p>
        `);
})

app.get("/about", (req,res) => {
    res.send(`
        <h1>About Me</h1>
        <p>Hi I'm, Ashlesh</p>
        `)
})

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
})
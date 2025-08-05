import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path"
import {fileURLToPath} from "url"

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bandNameGenerator);

var bandName = '';

function bandNameGenerator(req, res, next){
   bandName = `${req.body.street}${req.body.pet}`;
   next();
}


app.get("/", (req, res) => {
  res.sendFile(__dirname + `/public/index.html`);
  // console.log(__dirname);
})

app.post("/submit", (req, res) => {
  // res.send(`
  //   <h1>Your band name is:</h1>
  //   <h2>${req.body.street}${req.body.pet}✌️</h2>
  //   `)
  res.send(`
    <h1>Your band name is:</h1>
    <h2>${bandName}✌️</h2>
    `)

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// const fs = require("fs");
import fs from "fs"
fs.writeFile("messageNew.txt", "Hello Form Node.js",  (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 

fs.readFile("messageNew.txt", "Utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 


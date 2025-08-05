/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'


// inquirer
//   .prompt([
//     {
//         type: "input",
//         name: "info",
//         message: "Enter your Data to convert to qr: "
//     }
//   ])
//   .then((answers) => {
//     console.log(`Your data ${answers.info} will be converted.`);
//     var qrImage = qr.image(`${answers.info}`, {type: 'png'});
//     qrImage.pipe(fs.createWriteStream('YourQr.png'));
//   });


inquirer
  .prompt([
    {
        message: "Write your URL: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    const URL = answers.URL;
    var qrImage = qr.image(URL);
    qrImage.pipe(fs.createWriteStream("WebsiteURL.png"));

    fs.writeFile("YourURL.txt",URL, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

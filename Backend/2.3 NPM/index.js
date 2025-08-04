// var generateName = require('sillyname');

import generateName from "sillyname"
import superheroes, { randomSuperhero } from "superheroes"

var sillyName = generateName();
var sName = randomSuperhero();

console.log(`My name is ${sillyName}`);
console.log(`I am ${sName}`);

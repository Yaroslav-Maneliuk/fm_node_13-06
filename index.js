"use strict";
const path = require("path");
const fs = require("fs/promises");

fs.readFile("./text.txt", "utf-8")
  .then((content) => {console.log("===>>>", content);
  const newContent = content + '\nlorem444'
  fs.writeFile('./newText.txt', newContent, 'utf-8')
})
  .catch((error) => {console.log(error);});

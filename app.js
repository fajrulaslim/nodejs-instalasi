// MODUL BUILDIN NODEJS
// const fs = require("fs")
// fs.copyFileSync("text.txt", "text2.txt")
// console.log("copy text to text2 success")

// MODUL NPM
// const hero = require("superheroes")
// for(let i=0; i<10; i++){
//     console.log(hero.random())
// }

// MODUL SENDIRI
const op = require("./module")
const moduleTambah = op.tambah(10, 7)
const moduleKurang = op.kurang(10, 7)
console.log(op.title)
console.log(moduleTambah)
console.log(moduleKurang)
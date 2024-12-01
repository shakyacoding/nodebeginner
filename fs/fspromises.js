const fs = require('fs/promises')
const path = require('path')

const filename = "fspromises.txt"
const filePath = path.join(__dirname, filename)

console.log(filePath)
console.log(__dirname)

/* const file = __dirname
fs.promises
.readdir(file)
.then((data) => console.log(data))
.catch((err) => console.log(err)) */

//TODO- TO read how many files are there in a particular folder

/* const filePath1 = __dirname
fs.promises
.readdir(filePath1)
.then((data) => console.log(data))
.catch((err) => console.log(err)) */

//TODO - Performing CRUD operation

//? (1) To create file

fs
.writeFile(filePath, "HELLO WORLD DEEPAK")
.then(console.log("FILE Created successfully"))
.catch((err) => console.log(err))

//? (2) To read file data

/* fs.promises
.readFile(filePath, 'utf-8')
.then((data) => console.log(data))
.catch((err) => console.log(err)) */

//? (3) To update/append file data

/* fs.promises
.appendFile(filePath, "\n I love you")
.then(console.log("file updated successfully"))
.catch((err) => console.log(err)) */

//? (4) To delete file 

/* fs.promises
.unlink(filePath)
.then(console.log("file Deleted successfully"))
.catch((err) => console.log(err)) */
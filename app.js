const fs = require('fs');
const chalk = require('chalk');


// Using ES6 destructuring syntax to extract the command line arguments
const [argument1, argument2, regex, ...arguments] = process.argv

const userArguments = [...arguments]

// use the regexp constructor to convert the string to regex
const regexPattern = new RegExp(regex, "i")


// check through each file or directory and check if there is a pattern match
userArguments.forEach( file => {

    const statObj = fs.statSync(file)
    // directory check
    if(statObj.isDirectory()) {
        const files = fs.readdirSync(file);
        files.forEach(fileInDir => {

        try {
            const fileContents =  fs.readFileSync(`./${file}/${fileInDir}`, 'utf-8')

            const match = fileContents.match(regexPattern)

            if(match) {
                console.log(chalk.green.bold.inverse('Directory Match'))
                console.log(`---${file}`)
                console.log(`----${fileInDir}`)
            } else {
                console.log(chalk.red.bold.inverse('No Match Found!'))
            }
        } catch (error) {
            console.error(error)
        }
        })
    }   

    // file check
    else {
        try {
            const fileContents =  fs.readFileSync(`./${file}`, 'utf-8')
     
            const match = fileContents.match(regexPattern)
     
            if(match) {
                console.log(chalk.green.bold.inverse("File Match"))
                console.log(`----${file}`)
            } else {
                console.log(chalk.red.bold.inverse('No Match Found!'))
            }
         } catch (error) {
             console.error(error)
         }
    }

}
    
)







const fs = require('fs');


// Using ES6 destructuring syntax to extract the command line arguments
const [argument1, argument2, regex, ...arguments] = process.argv

const userArguments = [...arguments]

// use the regexp constructor to convert the string to regex
const regexPattern = new RegExp(regex, "i")


// check through each file and check if there is a pattern match
userArguments.forEach( file => {

    try {
       const fileContents =  fs.readFileSync(`./${file}`, 'utf-8')

       const match = fileContents.match(regexPattern)

       if(match) {
           console.log(file)
       }
    } catch (error) {
        console.error(error)
    }

}
    
)







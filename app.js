const fs = require('fs');


const [argument1, argument2, regex, ...arguments] = process.argv

const userArguments = [...arguments]

const regexPattern = new RegExp(regex)

userArguments.forEach( file => {

    try {
       const fileContents =  fs.readFileSync(`./${file}`, 'utf-8')
       console.log(fileContents)
    } catch (error) {
        console.error(error)
    }

}
    
)







const pattern = /\.[0-9a-z]+$/i;

const sentence = `Hello bros, how far, what's going on over there. Do you know that there is a foobar.txt inside here`

const sentenceArr = sentence.split(' ')

sentenceArr.forEach(word => {
   const match = word.match(pattern)
   if(match) {
       console.log('New match')
       console.log(match[0])
   }
})

// console.log('index.html is a sjfjk sjkds'.match(patt1))
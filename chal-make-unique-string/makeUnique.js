// Write your solution below:
const makeUnique = str => [...new Set(str)].join(``)
//    let strSet = new Set(str)
// //    let newStr = `` 
// //    strSet.forEach(char => newStr += char)
//    return [...strSet].join(``)
//}
console.log(makeUnique(`helloworld`))
console.log(makeUnique(`iwanttoclimbamountain`))
console.log(makeUnique(`himynamesteve`))


// A DIFFERENT SOLUTION
// let unique = ``
// for (let i = 0; i < str.length; i++){
//     if(!unique.includes(str[i])){
//     unique += str[i]
//  } 
// }
// return unique
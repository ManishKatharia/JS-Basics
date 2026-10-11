// in js null becomes empty in normal comparisons
//the reason is that an equality check == and <,>,>=,<= works differently.
//Comparisons converts null to a number,treating it as 0,
//thats why (3)null>=0is true and (1) null>0 is false.

console.log(2>1)
console.log("2">1)
console.log("true">1)

console.log(null>=1)
console.log(null==1)
console.log(null>=1)


console.log(undefined>1)
console.log(undefined>1)
console.log(undefined>1)

console.log("2"===1)  // === in this case type is automatically changed as req


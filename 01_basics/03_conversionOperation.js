let score=62

//console.log(typeof score)
//console.log(typeof (score))


let accountName=String (score)          //type of score converted from num to string
//console.log(typeof accountName)
//console.log( accountName)

let accountId=Number(score)             //string to num conversion not possible, gives NaN
//console.log(accountId)

let isLoggedIn="true"

let AccisLoggedIn=Number(isLoggedIn)    //bool->num gives NaN
console.log(AccisLoggedIn);             //any type->bool gives value



//Primitive- 7 types
   // String ,Number,Boolean, Null,Undefined,Symbol.BigInt//

const score=100
const scoreValue=123.99

const IsLoggedIn=true
const temperature=null
let userData;

const id=Symbol('1212')
const  UserId=Symbol('1212')
 
let roll_no=Symbol('62')

//console.table([score,scoreValue,IsLoggedIn,temperature,userData,id,UserId,roll_no]);


//console.log(typeof score);
//console.log(typeof scoreValue);
//console.log(typeof IsLoggedIn);
//console.log(typeof temperature);

//console.log(typeof userData);
//console.log(typeof id);
//console.log(typeof UserId);

let NewRoll_no=String(roll_no)
//console.log(typeof NewRoll_no);



 // Reference/Non-Primitive - 3 Types
   // Arrays,Objects,Functions//

const pokemon=["Charmender","squirtle","bulbasaur"];

let data_pokemon={
   name:"charizard",
   region:"kanto"
};
const myFunction=function(){
   console.log("hello duniya");
   
}

console.log(pokemon);
console.log(data_pokemon);


// stack(primitive)           heap (non-primitive)

let myYTname="manishdotcom"
let hisYTname=myYTname              // stack ka exp h
hisYTname="darkmanishYT"            // stack mein se he 1 copy aaega

console.log(hisYTname);
console.log(myYTname);

//************************************** 

let user1={
   name:"manish",
   age:20
}
let user2=user1
user2.age=21                        //heap ka exp h
console.log(user1.age);             // same heap mein he reference aaega na he copy
console.log(user2.age);



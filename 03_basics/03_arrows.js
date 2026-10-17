const { Long } = require("mongodb")

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username} , welcome to website`);               // this refers to the current context of the function
        //console.log(this);
    }

}

 user.welcomeMessage()
 user.username = "sam"                                                   // here the context was changed to "sam"
 user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    //console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


//console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

const myself={
    name:"manish",
    age:21,
    city:"gorakhpur",
  
    GreetUser: function(){
           // console.log(`${this.name}, GOOD MORNING`);
            
    }    
}
myself.GreetUser()


const introduce={
    name:"manish",
    age:21,

    hello:function(){
       // console.log(`Hello my name is  ${this.name}, i am ${this.age} years old`);
       // console.log(this);
        
    }
}
introduce.hello()

//const addThree=(num1,num2,num3)=>{            // basic syntax of arrow function (explicit return)
   // return num1+num2+num3
//}
//console.log(addThree(2,3,4));

const addThree=(num1,num2,num3)=> num1+num2+num3        // another way of implementing it (implicit return)

console.log(addThree(1,2,3));


const mulTwo=(num1,num2)=> num1*num2
console.log(mulTwo(2,5));

const userData=()=>({username:"manish" })

console.log(userData());


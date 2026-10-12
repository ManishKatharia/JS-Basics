// basic function syntax

function greetings(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

//greetings() 

// function to add 2 no.

function add(){
    const a=10
    const b=20

    console.log(a+b);
    
}

//add()

//function addTwoNum(n1,n2){
   // console.log(n1+n2);
    
//}

// when parameters r known

function addTwoNum(n1,n2){
    let result=n1+n2;
    return result    
}
const result=addTwoNum(2,3)

//console.log("Result is ",result);

function productTwoNum(n1,n2){
    return n1*n2    
}

const result2=productTwoNum(4,8)
//console.log(result2);

function userlogin(name ="manish" ){
    if(name===undefined){
        console.log("Enter Your Name");
        return 
    }
    
    return `welcome ${name}`

}
//console.log(userlogin());

// when parameters are unknown

function cartPrice(...num1){
    return num1

}
//console.log(cartPrice(200,2000,200000));

// Handling objects in JS

const users={
    name:"manish",
    age:21
}

function handleObject(anyobject){
    console.log(`My name is ${anyobject.name} and my age is ${anyobject.age}`);    
} 
//handleObject(users)


const Order={
    orderId:21,
    item:"burger"
}
function handleOrders(burgers){
    console.log(`My order ID is  ${burgers.orderId} and my item name is ${burgers.item}`);    
} 
//handleOrders()
handleOrders({
    orderId:22,
    item:"fries"
})


//handling arrays in JS


const items=["burger","fries","momos"]   

function getItems(fastFood){
    return fastFood[1]
}
console.log(getItems(items));



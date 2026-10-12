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
console.log(userlogin());

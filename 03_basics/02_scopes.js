//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function elder(){
    const user="Krunal"

    function young(){
        const name="Hardik"
        console.log(user);
    }

   // young()
}
elder()

if (true) {
    const id=10
    if (id===10) {
        console.log("hello user");
    }
}



console.log(addone(5))                         // here "addone" can be accessed because the function itself is independent

function addone(num){                          
    return num + 1
}



addTwo(5)                                       //In this case, addTwo is defined as an expression 
const addTwo = function(num){
    return num + 2
}
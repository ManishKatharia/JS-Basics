// Immediately invoked function expression

// SYNTAX ->   (function definition)(function execution)

const greet=function(){
    console.log("hello user");                 // simple 
    
}

();

const Greet=(function(){                        // immediately invoked
    console.log("hello user");
    
})();


( (name)=>{                                         // using arrow function
    console.log(`hello ${name}`);
    
})("akshay");
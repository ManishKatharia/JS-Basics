//if-else
const temperature=31
if (temperature===31) {

    console.log(`temperature is ${temperature}`);
    
}else{
    console.log(`temperature is above 31`);

}

const score=300
if (score>200) {
    let level=22
    console.log(`you reached the level ${level}`);
    
}

//console.log(`you reached the level ${level}`);            // Using "let"/"const" gives it a block level scope, resulting into error when called outside the block

// Nested if-else

const points=90
if (points>500) {
   // console.log("more than 500");
    
} else if (points>400) {
    //console.log("more than 400");
    
}   else if (points>300) {
    //console.log("more than 300");
    
}   else if (points>200) {
    //console.log("more than 200");
    
} else {
    //console.log("under 100");
    
}

const userLoggedin=true
const debitCard=false


if (userLoggedin && debitCard) {
    console.log("You can shop now");
    
}

if (userLoggedin || debitCard) {
    console.log("logged in , please attach your debit card!");
    
}







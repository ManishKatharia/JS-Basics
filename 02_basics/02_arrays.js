// advanced methods for array

const ind=["kohli","rohit","gill"]
const aus=["head","marsh","conolly"]

//ind.push(aus)

//console.log(ind);                                      //on using push "aus" completely taken as a string in the newly formed array

//const all=ind.concat(aus)
//console.log(all);


const room_211=["reeta","kamal","tara","lavanya"]
const room_06=["mamta","pradeep","garvit"]

//const family_1=room_211.concat(room_06)
//console.log(family_1);

//const family_2=room_06.concat(room_211)
//console.log(family_2);

//instead of this we can use "spread".

//const one_family=[...room_06,...room_211]
//console.log(one_family);



const real_no=[1,2,3,[4,5],[6,7,8]]
const whole=real_no.flat(3)

console.log(whole);                                 // flat makes all sub arrays into 1 single array


console.log(Array.isArray("manish"));               //checks the type is array or not

console.log(Array.from("manish"));                  // converts into array

console.log(Array.from({name:"manish"}));           //cant take this coz pehle btana pdega kis type ka krna h


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));                                      // set of elements converted into a newly formed array






//for loop
//for (let i = 0; i < array.length; i++) {
    //const element = array[i];
    
//}

const a=[1,2,3,4,5,6,7,7,8,9]
for (let i = 0; i < 5; i++) {
    const element = a[i];
   // console.log(a);
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Table of:${i} `,);
    for (let j = 1; j <= 10; j++) {
      //  console.log(`inner loop:${j}`);
       // console.log(i + "*" + j + "=" + i*j) ;
        
    }
    
}

// break and continue

//const myArray=["bare-foot","scooty","bike","car"]
//for (let i = 0; i < myArray.length; i++) {
   // const element=myArray[i]

    //if (i==2) {
    // console.log(`I will go to clg by ${element}`)
    //    break
    //}

   // console.log(`I will go to my clg by ${element} today`);
        
//}

const myArray=["bare-foot","scooty","bike","car"]
for (let i = 0; i < myArray.length; i++) {
    const element=myArray[i]

    if (i==2) {
       // console.log(`I will go to clg by ${element} today`)
        continue
    }

   // console.log(`I will go to my clg by ${element} today`);
        
}

// while loop

let i=0
while (i<=10) {
   // console.log(`value is ${i}`);
    i++    
}

let heroes=["ironman","thor","loki","hulk"]

let villan=0
while (villan<heroes.length) {
    //console.log(`My fav hero is ${heroes[villan]}`);
    villan++ ;
}

let Bat=["virat","rohit","dhoni"]
let ball=0
while (ball<Bat.length) {
    //console.log(`my fav batsman is ${Bat[ball]}`);
    ball++
}

// do while 
let num=0
do {
    console.log(`my fav number is ${num}`);
    num++
    
} while (num<10);
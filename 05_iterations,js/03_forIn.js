// continuing from prev file
const myObject={
    me:`Manish`,
    him:`dad`,
    her:`mom`,
    lil:`sister`,
    bro:`brother`
}
for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const myArray=['1','2','3']

for (const key in myArray) {
    console.log(myArray[key]);
    
}
// reduce function

const num=[1,2,3,4,5]
const newNum=num.reduce( function(acc,current){
   // console.log(`acc:${acc}  current value :${current}`);         // basic
    
    return acc+current},0
)
//console.log(newNum);

const total=num.reduce((acc,cur)=>{
    console.log(`accumulator:${acc} current value:${cur}`);            // arrow function
    return acc+cur},1
)
console.log(total);

// forEach loop

const lang=["java" ,"python", "javascript"]

lang.forEach((value) => {
   console.log(` i am good at ${value}`);
    
});

function print(value) {
   // console.log(value);  
}
lang.forEach(print)

const arr=[
    {
        lang:"java",
        price:1000
    },
    {
        lang:"python",
        price:2000
    },
    {
        lang:"js",
        price:4000
    }
]
arr.forEach( (item)=>{
   // console.log(`I can teach ${item.lang} at just ${item.price}`);
    
})
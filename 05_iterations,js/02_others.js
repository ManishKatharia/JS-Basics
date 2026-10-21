// for of loop basically ends up forming loop over a scope with default incremental value

// strings in array ["","",""]
// objects in array [{},{},{}]

//for (const element of object) {     // element is the iterator like for "i" in range
                                    // object is nothing but where the loop is needed
//}

const heroes=["thor","ironman","hulk","spiderman"]

for (const i of heroes) {
  //  console.log(i);
    
}

const quote="you are a looser"
for (const q of quote) {
   // console.log(q);
    
}

// Map function

const map=new Map()

map.set("IND","India")
map.set("BAN","Bangladesh")
map.set("NEP","Nepal")

//console.log(map);
for (const key of map) {                                // It takes it whole as an array
    console.log(key);
    
}
for (const [key,value] of map) {                        // Taking both key-value pair assures they are taken as separate
 console.log(key ,':-', value);
    
}
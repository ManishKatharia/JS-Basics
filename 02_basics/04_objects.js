// objects as constructor

const cricketer=new Object()            // singleton obj
const upca={}                           // non singleton obj
//console.log(cricketer);
//console.log(upca);

const cricket={
    name:"Manish pandey",
    state:"karnataka",
    Age:31,
    isActive:"false"
}
//console.log(cricket);


const userData={
    email:"abc@yahoo.com",
    name:{
        userName:{
            FirstName:"manish",
            lastName:"katharia"
        }
    },
    fatherName:{
        fullName:{
            first:"kamal",
            last:"katharia"
        }
    }
}
//console.log(userData.name.userName);
//console.log(userData.fatherName.fullName);

//////  objects are taken as numeral value


const obj1={1:"m",2:"a"}
const obj2={3:"n",4:"i"}
const obj3={5:"s",6:"h"}

//const obj4=Object.assign({},obj1,obj2,obj3)

const obj4={...obj1,...obj2,...obj3}        // instead of assign we can use spread operator
//console.log(obj4);

//console.log(cricket);

//console.log(Object.keys(cricket));
//console.log(Object.values(cricket));
//console.log(Object.entries(cricket));
//console.log(cricket.hasOwnProperty("isActive"));    // checks whether the requested parameter is inside it or not
//console.log(cricket.hasOwnProperty("nationality"));    

const course={
    name:"js hindi",
    tutor:"hitesh chaudhary",
    price:"free"
}

const{tutor}=course

console.log(tutor);


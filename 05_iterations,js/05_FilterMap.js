// filter map

const num=[1,2,3,4,5,6,7,8,9,10]

const newNum=num.filter( (num)=>{           //return is manadatory
    return num>4
}   
)
//console.log(newNum);

const newNums=[]

num.forEach( (num)=>{
    if ( num>4) {
        newNums.push(num)
    }
})
//console.log(newNums);


const vella=[]
num.forEach((num) => {
    if (num<5) {
        vella.push(num)
    }
});
//console.log(vella);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Ten', genre: 'Fiction', publish: 1981, edition: 1989 },
    { title: 'Book Eleven', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    { title: 'Book Twelve', genre: 'Science', publish: 1981, edition: 1989 },
];
let myBook=books.filter( (book)=>{
   return book.publish>'2000'&& book.genre==='Science'
})
console.log(myBook);



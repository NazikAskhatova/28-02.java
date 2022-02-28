

// let fruits = ["apple", "banana", "qiwi", "peach"]
// fruits.forEach(element => {
//     console.log(element);
// });

// let fruits = ["apple",
// "banana",
// false,
// 13,
// "hello",
// ["1", "2", "3"],
// {name: "Peter", Lastname: "parker"},
// 12345]


// string
// boolean
// integer
// string
// array
// object
// integer

// fruits.forEach(item => {
//     console.log((typeof item))
// })

let cards =  [{
   name: "Beomgyu ",
   lastname: " Choi " ,
   age:  20 
},
{
    name: "Lily ",
    lastname: " Rose Depp",
    age:  22
} ,
{
    name: "Enhypen ",
    lastname: " Rookies",
    age:  2
},
{
    name: "Kim ",
    lastname: " Sunoo" ,
    age:  19
 },
 {
     name: "Ash ",
     lastname: " Links",
     age:  17
 } ,
 {
     name: "T X T ",
     lastname: " Chaotic talented kids",
     age:  3
 }

]

// let cardsWith = 

let choi = document.querySelector('#choi')
 cards.forEach((item) => {
let person = document.createElement('div');
let name = item.name;
let Lastname = item.lastname;
let age = item.age;
person.append(name);
person.append(lastname);
person.append(age);
cards.append(person);

 })



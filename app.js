
// var animal = "lion"
// var animals = ["sheep", "goat", "Dog", "cat"];

// animals.unshift(animal);
// alert(animals.pop());
// console.log(animals);

// let arr = ["I", "study", "Javascript"];
// arr.splice(1, 1); // from index 1 remove 1 element
// alert(arr); // ["I", "Javascript"]
 
// arr.slice([start], [end])
// let arr = ["t", "e", "s", "t"];
// alert(arr.slice(1, 3));
// alert(arr);

// Array Iteration Method
// The forEach method allows to run a function for each element of the array
// let arr = ["Bilbo", "Gandalf", "Nazgul"];
// arr.forEach((item, index, array) => {
    // alert(`$(item) is at index $`)
//})
// var animals = ["sheep", "goat", "Dog", "cat"];

// animals.forEach(function (animal){
//  alert(`${animal} can also speak`)
// });

// let users = [
//     { id: 1, name: "john" },
//     { id: 2, name: "pete" },
//     { id: 3, name: "mary" },
// ];
// let someUsers = users.filter((item) => item.id < 3); 

// alert(someUsers[2].name);

//map
// let arr = ["Bilbo", "Gandulf", "Nazgul"]
// let lengths = arr.map(item => item.length);
// alert(lengths);

// let arr2 = [4, 86, 32]
// let calculate = arr2.map(item => item *6);
// alert(calculate);
//OR
// function calc(grade) {
//     return grade /2;
// }
//  let studentGrade = [4, 89, 32];
//  calculate = studentGrade.map(calc)
//  alert(calculate);

// split and join:
// let names = 'Bilbo, Gandalf, Nazgul,'
//  let arr = names.split(', ');
//  arr.forEach((name) => {
//      alert( `A message to ${name}.` );  
//  }
//  // OR the one below will give you same results

//  let names = 'Bilbo: Gandalf: Nazgul:'
//  let arr = names.split(': ');
//  arr.forEach((name) => {
//      console.log( `A message to ${name}.` );
//  })

// class icecreamFactory{
//     constructor() {
//         this.createIcecream = function(flavour) {
//             let iceCream;
//         if(flavour==='chocolate') {
//             iceCream = new Chocolate();
//         }
//         else if(flavour==='mint') {
//             iceCream = new Mint();
//         }
//         else if(flavour==='strawberry') {
//             iceCream = new Strawberry();
//     }
//     return iceCream;
// };
// }
// }

class Users {
    constructor(email, name, login) {
        this.email = email;
        this.name = name;
        this.login = login;
        this.loginMessage = function () {
            if (login == true) {
                return `${name} has successfully login`;
            } else {
                return `${name} please login`
            }
        }
      
    }
}

const nelson = new Users("nelson@gmail.com", "nelson", true);
const peter = new Users("peter@gmail.com", "Peter", false);

console.log(nelson.loginMessage());
console.log(peter.loginMessage());
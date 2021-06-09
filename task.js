/*let admin; // declared
let newName;
newName = "John" // variable assigned
admin = "John"
// let newName = "John";
// newName; 
alert(admin);*/


// let height ="";
// let base="";
// height = 7;
// base = 3.5
// Area = (height * base * 0.5);
// alert("The area of the triangle is " + Area + "CM2");

// write a function with a name withdraw that takes in two parameters, balance and amount
// write a conditional statement that returs "insufficient balance" if amount is greater than balance. if 
// amount is less than balance, return "Transaction Successful".

let amount = 2000;
function withdraw(balance, amount) {
    if(amount<balance){
        return "insufficient balance";
    } else
    return "Transaction Successful";
}
}
alert(withdraw);

// Declare an arrary
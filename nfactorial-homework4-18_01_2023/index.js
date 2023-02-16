// let x = prompt("ty age?", "")

// function checkAge(age) {

    

//     result = (age > 18) ? 'Welcome 18+' : "Родители разрешили?";

    

//     // if (age>18) {

//     //     return confirm("Welcome 18+");

//     // } else {

//     //     return confirm("Родителт разрешили?")

//     // }

//     return confirm(result);

// }

 

// // console.log(checkAge(x))

// checkAge(x)




// let x = prompt("give a number?", "")

// let n = prompt("give a multiplyer", "")

// function pow(a, b) {

//     let result =1;

//     for (let i = 0; i < b; i++) {

//         result = result * a;

//     }

//     return result;

// }

 

// console.log(pow(x,n))

 

function ask(q,yes,no) {

    if (confirm(q))

        yes()

    

    

    else 

        no();

    

}

 

ask ("vy soglasny",

function() {alert("you agreed"); },

function() {alert("canceled"); }

)

console.log("jumbo"[1])


const first = [4,5,6];

const second = [1,2,3];
const third = [7,8,9];

const newArray = [...second,...first,...third];
console.log(newArray)
// let arr = [5,2,1,-10,8];
 let x= 5
 alert(x++)
 

// arr.sort()

// alert(arr)

 

// let person1 = { name: "name1", age :25};

// let person2 = { name: "name2", age :30};

// let person3 = { name: "name3", age :28};

// let arr2 = [];

// let users = [person1, person2, person3];

 

// for (let i in users) {

//     arr2.push(users[i].name)

// };

// let arr3 = [];

// console.log(arr2);

 

// for (let i in users) {

//     arr3.push(users[i].name);

//     arr3.push(users[i].age)

// };

 

// console.log(arr3);

 

// let arr4 = [];

// function getAvg(arr) {

//     let count =0 ;

//     let sum =0;

//     for (let i in arr) {

        

//     sum = sum + arr[i].age;

//     count++;

//     };

//     return sum/count;

    

// }

// getAvg.apply(thisArg, users);
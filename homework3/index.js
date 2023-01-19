alert("hello Zhanbolat");

 

let answer = confirm("ty tot?", "")

console.log(answer);

 

const num = prompt("add ur number", "")

alert(num);

 

let a =+ prompt('a?', '');

// console.log(a)

 

switch(a) {

    case 0:

        alert(0);

        break;

    case 1:

        alert(1);

        break;

    case 2, 3:

        alert("2 , 3");

        

        break;

    default:

        console.log("wrong")

}

let n = 1;

let sum =0;

while (n<100) {

    sum =sum + n;

    n++;

}

 

alert(sum);
// alert("hello Zhanbolat");

 

let answer = confirm("ty tot?", "")

console.log(answer);

 

const RESTORAN = "Cofee";

const MARKET = "Raushan";

const TEAM = "Liverpool";

let a = 100;

let lier = false;

const Player = {

    name: "Ronaldo",

    height: 187,

    weight: 80

};

 

const vehicle = {

    brendname: "Audi",

    model: "A6",

    "type": "beast"

 

};

 

console.log(vehicle)

 

vehicle.model = "s4"

console.log(vehicle)

 

delete vehicle.model

 

console.log(vehicle)

console.log(vehicle["type"])

 

let salaries = {

    aruu: 100,

    dalida: 160,

    samat: 130

};

console.log(salaries.dalida);

 let sum =0;

for (let key in salaries) {

    sum = sum + salaries[key]

};

console.log(sum);
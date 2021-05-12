// start sort function
// syntax 1
let array = [1, 2, 3, 9, 4, 5];
// console.log(array);
array.sort();
// console.log(array);

// syntax 2

let array1 = [{ x: 2, y: 10 }, { x: 5, y: 7 }];
// console.log(array1);
function compare(a,b) { 
  return a.y - b.y;
}
array1.sort((a,b)=>a.length-b.length);
// array1.sort(compare);
// console.log(array1);

let val = "this is my first code editors";

let words = val.split(/\W+/).filter((word) => word.length > 2);
words.sort((x,y)=>y.length-x.length);
// console.log(words);
// end of sort function




// start reduce function

let arr2 = [1, 2, 3, 9, 4, 5];

function sum(acc,val) { 
  return acc + val;
}
let total=arr2.reduce(sum);
// console.log(total);

let total1 = arr2.reduce((a, b) => a > b ? a : b)
// console.log(total1);

// end reduce function


// start fill function

let creArr = [{ name: "chandu", email: "chandu@gmail.com", mobile: "784345345" }, { name: "sagar", email: "sagar@gmail.com", mobile: "75555554" }, { name: "sree", email: "sree@gmail.com", mobile: "843534533" }];

let createArr=Array(5).fill(creArr[0]).map((p) => p.email);
// console.log(createArr);


// spreed opareter

let arr3 = [{ name: "sagar", lastName: "chandu" }, { name: "doom", lastName: "fillDate" },{ name: "sagar", lastName: "chandu" }];
let filterArr = arr3.filter((x, i,a) => a.indexOf(x.name)===x.name)
console.log(filterArr);

let string = "chandu";
console.log(...string[string.length-1]);


// filter function

let arr4 = [1, 2, 3, 4, 5, 2, 5, 1];

let fls = arr4.filter((x, i, z) => x>2 && x<4);
console.log(fls);


// reverse function
const reverse = (str) => { 
  let r = ""
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i]
  };
  // console.log(r)
}
reverse("chandrashekar");

//reduce function
let arr5 = [1, 2, 3, 4];

function sum(acc, val) { 
 
  return acc+val;
}
let totlaValue = arr5.reduce(sum, 0);
// console.log(totlaValue);
const reduce = (acc, value) => acc + value;
let secondTotla = arr5.reduce(reduce);
// console.log(secondTotla);
// find max value and min value
let findValue = arr5.reduce((a, b) => b < a ? a : b);
console.log(findValue);

//object related values

let obj1 = { name: "chandu", email: "sagar@gmail.com", number: 123445 };
let assign = Object.assign(obj1, {})
// console.log(assign);
let keys = Object.keys(assign).map((item,index)=>item);
// console.log(keys);
let values = Object.values(obj1);
// console.log(values)
let jsonData=JSON.parse(JSON.stringify(obj1))
// console.log(jsonData);


// prime number 
var array = new Array(10);
for (var i=2 ; i<=array.length-1; i++) {
    if ((i % 2 === 0) || (i % 3 === 0)) {
        // continue;
        // console.log(i+",");
    }
}


let arr1 = [1, 2, 3, 4, 5,2,4];
let arr2 = arr1.filter((x, i, a) =>a.indexOf(x)===i);
// console.log(arr2);

let arr = new Array(10);

for (let i = 0; i <= arr.length-1; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
 }


 

let input = ["cat", "dog", "god", "act"];

// output = [[cat, act], [dog, god]]


let newArr=input.filter((x,i)=>i===0 || i===3);
let newArr1=input.filter((y,i)=> i==1 || i==2);
let newArr2=input.filter((y,i)=> y=="cat" || y=="god");

let totlaArr = [newArr, newArr1,newArr2];
// console.log(totlaArr);


const arr3 = [0, 1, 2,[[3, 4]]];
// console.log(arr3.flat(2));

const arr4 = [{ name: "abc", value: "sdx" }, [[{ email: "chandu@gmail.com" }, [{password:"chand@12"}]]]];

// console.log(arr4.flat(3));











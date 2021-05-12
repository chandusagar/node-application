// let demo = (hellow) => {
//   let a = [...hellow];
//   // console.log(a.reverse());
//   console.log(a.reverse());
// };
// demo("hellow");

// //converstion number
// let x = "",
//   y = "",
//   z = "";

// for (let i = 0; i < 10; i++) {
//   if (i > 0 && i < 4) {
//     x += `${i}`;
//   } else if (i > 3 && i < 7) {
//     y += `${i}`;
//   } else if (i > 6 && i < 10) {
//     z += `${i}`;
//   }
//   //  demo1(i);
// }

// console.log(`(${x})-${y}-${z}0`);

// // function reverse1(str) {
// //   var r = "";
// //   for (var i = str.length - 1; i >= 0; i--) {
// //     r += str[i];
// //   }
// //   console.log(r);
// // }

// // reverse1("hellow");

// //reverse method
// reverse = (str) => {
//   let r = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     r += str[i];
//   }
//   console.log(r);
// };

// reverse("hellow");

// // negitive infinity

// Num = (n) => {
//   console.log(n / 0);
// };

// Num(100);

// console.log("chandrashekar\n demo");

const revers = (str) => {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--){
    r += str[i];
    
  }
  console.log(r);
}

revers("Hello")

const arr1 = [1, 2, 4, 5,1, 6, 3, 4, 2];
let arr2 = arr1.filter((x, i,a) =>a.indexOf(x) ===i );
// console.log(arr2.sort());

let arr3 = arr1.reduce((a, b) => b < a ? a : b);
console.log(arr3);

const arr4 = ["app", "temp", "lood", "ball"];

let arr5 = arr4.filter((x, i) => i == 0 || i == 3);
let arr6 = arr4.filter((y, i) => i == 1 || i == 2);
let arr7 = [arr5, arr6];
// console.log(arr7);

function Person() {
  this.firstName = "chandu";
  this.lastName = "sagar";
 
  // console.log(this);
}

Person.prototype.name = function () { 
  return this.firstName;
};
console.log(Person());
// Apple.call(20);
// Apple.apply("sagar");

let crArr = Array(20).fill(1).map((x,i)=>x);
console.log(crArr);





 







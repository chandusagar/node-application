// 1) task one reverse methods
let reverse = (str) => {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  console.log(r);
};
reverse("hellow");

// 2) task whtat are the different between == and === different

let x = 2;
let y = "2";

console.log(x == y); //this value true
console.log(x === y); //this value false

// 3) task what is the spered aoprater

// exp1
let obj1 = { name: "one", value: "hellow" };
let obj2 = { firstName: "chandu", lastName: "sagar" };

let obj = { ...obj1, ...obj2 };
console.log(obj);

// exp2
let array1 = [1, 2, 3, 4];
let array2 = [{ a: { firstName: "chandu", lastName: "ssgar" } }];
let obj4 = { email: "a@gmail.com", phoneNo: "12345" };

let newArr = [obj4, ...array1, ...array2];
let array3 = [...newArr].filter((x) => x > 0 && x < 5);
// array3 = [...newArr].filter((x) => x.email);
array3 = [...newArr].filter((x) => x.email || x.a);
console.log(array3);

// exp3
let addAllData = (...str) => {
  let store = 0;
  let i = 0;
  while (i < str.length) {
    store += str[i];
    i++;
  }
  console.log(store);
  //   return store;
};

addAllData(1, 2, 3, 4, 5);

// 4) task what are the different between  let and const and var verbuls

//exp1

let blockScope = () => {
  for (let i = 0; i < 5; i++) {
    var b = i;
    let a = i;
  }
  //   console.log(b, a);
};

blockScope();

// (function(){
//   var a = b = 3;
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));

// manjunath_dandina@persistent.com

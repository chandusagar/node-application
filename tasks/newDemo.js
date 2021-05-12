let extractUniq = [2, 5, 11, 6, 10, 2, 5, 4, 3, 10, 11];

let newArr = extractUniq.filter((x, i, a) => a.indexOf(x) === i);
// console.log(newArr);

// let listArr = [...extractUniq].filter(x =>x);
// console.log(listArr);
let newDetails = () => { 
let obj = [];
for (let i = 0; i < extractUniq.length; i++) { 
    obj = extractUniq.filter(x => x !== extractUniq[i]);
    }
    return obj;
}

// console.log(newDetails());

let max = [7, 8, 11, 12, 5, 2];
 let maxmum=[...max].filter(x=>x>11)
// console.log(maxmum);

let objOne = {
name:"Politician",
salary:"High"
}
let objTwo = {
work:"Lie",
costume:"white",
mind:"Black"
}

let newobj = { ...objOne, ...objTwo };
// console.log(newobj);

// console.log(str);
var str=4;
// console.log(a);
// let a;

if (str===4) { 
    // let a = 4;
    var b = 4;
}
// console.log(b);

const obj1 = { name: "chandu" };
obj1.name=""

for (i = 0; i < 10;i++){
    // console.log(i);
}
sum = 10;
console.log("chandu",i,sum);


let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 6, 3, 8];

let subArr = [];
newArr.forEach((x,i,z) => { 
    if (z.indexOf(x) !==x) {
        subArr.push(x);
     }

})

console.log(subArr);

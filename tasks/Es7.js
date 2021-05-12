
let ArrFile = [{ name: "sree", lastName: "ram" }, { name: "chandu", lastName: "jai" }, { name: "sree", lastName: "ram" },{ name: "chandu", lastName: "jai" },{ name: "chandu", lastName: "Akila" }];

function removeValue(data) { 
    return data.filter((value, index) => { 
        let obj = Object.values(value);
        if (value.lastName === obj[index] || value.name === obj[index]) { 
            console.log(obj);
            return value;
        }
    })
}



// console.log(removeValue(ArrFile));

let arr = [1, 2, 3, 4, 5];

let newArr=arr.filter((a, b) => a>3);
// console.log(newArr);


let findArr = [2000, 100, 4500, 6847, 2201, 4785454, 97001];

let findNumber = findArr.reduce((a, b) => b < a ? a : b);
// console.log(findNumber);



let PrimeArr = new Array(100);
PrimeArr.fill();
for ( let item in PrimeArr) {
    if (item%1===0) { 
        // console.log(item);
    }
}

function Test() { 

}

// example one
var obj = {
    name: "tom",
    getName: function () {
        return this.name;
    }
}

var person = obj.getName;
// console.log(person());

// console.log(obj.getName());


//example two

function test() { 
    this.x = 10;
    this.y = 20;
    this.tom = function () { 
        console.log(this.x,this.y);
    }
    tom();
}

test();


function demo(isValid) { 
    var x = 100;
    // console.log(x);
    if (isValid) { 
        (function () { 
          var x = 20;
        // console.log(x);
        })()
       
    }
    // console.log(x);

}

// demo(true);
function Person() { 

}

let temp =new Person() ;
temp.name = 'Tom';
temp.getName = function () { return this.name };

var person = temp.getName;
// console.log(person());

// console.log(temp.getName());

//apply and call methods 
function NewCall() { 
    console.log(this);
}

NewCall.apply("chandu");
NewCall.call(10);

//prottotype calls new
function soo() {
    console.log(this);
}

soo.prototype.count = 0;
var Obj_one = new soo();
var Obj_two = new soo();
console.log(Obj_one.count);
Obj_one.__proto__.count = 100;
console.log(Obj_two.count);


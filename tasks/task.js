const array = [1,5,7,3,2,8,10];
array.sort();
// console.log(array);

let arr = [1, 7345345, 383424, 353545, 983535, 5734534, 234534895]

let redValue = arr.reduce((x, y) => y > x ? x : y);
// console.log(redValue);

let arr1 = [1, 2, 3,5,1,8, 4,3, 5, 6, 7];

arr1 = arr1.filter((x, i, a) => a.indexOf(x) !== i);
// console.log(arr1.sort());


let arr2 = [{ name: "chandu", lastName: "sagar" }, { name: "ram", lastName: "sagar" }, { name: "chandu", lastName: "sagar" },{ name: "ram", lastName: "sagar" },{ name: "free", lastName: "sagar" }]

const removeValues = (arr) => { 
    return arr.forEach(element => {
        let obj = Object.values(element.name);
        console.log(element);
    });
}
// removeValues(arr2);
console.log(removeValues(arr2));

// arr2 = arr2.filter((x, i, a) => a.indexOf(x.name) === x.name);
// console.log(arr2);

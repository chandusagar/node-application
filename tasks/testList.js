const reverse = (str) => { 
    let r = "";
    for (let i = str.length - 1; i >= 0; i--) {
        r +=str[i]
    }
    console.log(r);
}

reverse("Hellow")

let arr1 = [1, 4, 3, 5, 3, 4];
let arr2 = [1, 4, 3, 5, 3, 4, 5, 3, 6,7,8,7,9,8];
let arr3 = [1, 3, 4, 5, 2, 5, 7, 5, 2, 6, 2, 6];

let newArr = arr2.filter((x, i, z) => z.indexOf(x) === i);
// let newOne1 = [];
arr2.forEach((x, i, z) => {
    if (z.indexOf(x) !==i) { 
        console.log(x);
    }
})

let x = "chandu sagar";
x.trim();
console.log(x);



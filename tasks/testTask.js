let arr1 = [56,21,35,66,44,22,56,33,11,21,77,56]
let arr2 = [56, 21, 15, 66, 44, 22, 56, 33, 11, 23, 77, 56];

let arr3 = arr1.filter((x, i, a) => a.indexOf(x) !== i);
let arr4 = arr1.filter((x, i, b) => x === arr2[i]);
console.log(arr4);

// for (let i = 0; i < arr2.length; i++) { 
//     if (arr1[i]) { 

//     }

// }

let details = (x) => { 
    arr1 = [56,21,35,66,44,22,56,33,11,21,77,56]
    // arr2 = [56, 21, 15, 66, 44, 22, 56, 33, 11, 23, 77, 56]

    let arr3 = arr1.filter((x) =>x!==x);
    // console.log(arr3);

    // let newArr = [];
    // for (let i = 0; i < arr2.length;i++) { 
    //     newArr = arr2.filter(x => x!==arr2[i])
    //     // return newArr;
    // }
    // return newArr;
    // console.log(newArr);

}

console.log(details());


// function () { 

// }
// 21- twice
// 56 - twice

reverse = (str) => { 
    let r = "";
    for (let i = str.length - 1; i >= 0; i--) { 
        r += str[i];

    }
    console.log(r);
    // return r;
}

reverse("hellow");
// import axios from "axios"

// export const actionData = () => async (dispatch) => { 
//     try {
//         res =  axios.post('https://loalhost:3000/post', data);
//         // return res.data;
//          dispatch({
//              type: "TYPE_DATE",
//              payoad:res.data
//     })
//     } catch (error) { 
//         console.log(err);
//         // return error;
//          dispatch({
//              type: "ERROR",
//              payoad:res.data
//     })
//     }
   
    
// }


let input1 = [1,2,3,4,5]
let input2 = [1, 3, 4, 6, 7]
// Output:
// [1, 2, 3, 4, 5, 6, 7]

let input3 = [...input1, ...input2];

let input4 = input2.filter((x, i, z) => z.indexOf(x) !==input1[i]);
// console.log(input4)

let arr1 = [1, 4, 3, 5, 3, 4];
let arr2 = [1, 4, 3, 5, 3, 4, 5, 3, 6];
let arr3 = [1, 3, 4, 5, 2, 5, 7, 5, 2, 6, 2,6];
let arr4 = [...arr1,...arr2,...arr3];

// arr1.forEach((x,i) => { 
//     if (arr1.indexOf(x) === i) { 
//         arr2.push(x);
//     }
// })
let subData = [];
arr4.forEach((x,i,z) => { 
    if (z.indexOf(x) === i) {
        subData.push(x);
    }
    return subData;
})

console.log(subData);

// arr3.forEach((y,i) => { 
//     if (arr3.indexOf(y)!=i) { 
//         arr4.push(y);
//     }
// })

let arr6 = arr3.includes((x, y, z) => x === arr1[i]);
console.log(arr6);

// for (let i = 0; i < arr1.length; i++) { 
//     if (arr1[i]) { 
//         // console.log(i);
//     //    arr2.push()
//     }
 
// }

// console.log(arr2);

let a = false, b = false, c = "chandu", d = "sagar",g="shiva",h="Sree";

// let f = a === true ? (c===2 ? (c-d):(d*c))  : (b===false ? (d - c):(d/c));
let f = a === b ? (c ? (c==="chandu" ? "s":"D") :(d==="sagar" ? "D":"E")) : (g === "shiva" ? g : h);
// console.log(f);


var x = 2, y = 5, z = x + y;

console.log(z);
console.log("3"+x+y);
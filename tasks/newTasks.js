const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(array1.reduce(reducer));

// console.log(array1.reduce(reducer, 5));


function sun(value,i) { 
    return value + i;
}

// console.log(array1.reduce(sun,0));


let newArry1 = ["chandu", "sagar", "demo"];

// console.log(newArry1.pop());


/* .main{
  width:300px;
  height:100px;
  border: 1px solid #333;
  padding:20px 10px;
  margin:80px auto;
  position:relative;
}

.child{
  width: 30px;
  height: 30px;
  border:1px solid #333;
  border-radius:300px;
  position:absolute;
  top:-20%;
  left:40%;
  background-color:#fff;
  

  
} */

//  <div class="main">
// <div class="child">

// </div>

// </div> 

// import axios from "axios";
// import { GET_ERRORS, GET_USER_LIST } from "./types";

// export const getList = (id) => async (dispatch) => { 
//   try {
//     let res = axios.get('https://localhost:3000/getList', id)
//     dispatch({ type: GET_USER_LIST, payload: res.data });
//   } catch (err) { 
//     dispatch({type:GET_ERRORS,payload:err})
   
//   }
// }


// const initialState = {
//   userList: []
// }

// export default function (state = initialState, action) { 
//   switch (action.type) { 
//     case GET_USER_LIST: return {
//       ...state, userList: action.payload,
//     }
//     default: return state;
//   }

// }

function reset(message) { 
  return this.name + '\n' + message;
}

let obj1 = { name: "chandu" };


// console.log(reset.call(obj1, "sagar"));
// console.log(reset.apply(obj1, ["sagar"]));

const reverse = (str) => { 
  let r = "";
  for (let i = str.length - 1; i >= 0; i--){
    r += str[i];
    // console.log(reset.apply(obj1,[`${str[i]}`]))
  }
  // console.log(r);

}
reverse("hellow");

let arr1 = [1, 2, 3, 4];

const reduce = (value, index) => value + index;

function sum(value,i) { 
  return (value + i);
}
// console.log(arr1.reduce(reduce));
// console.log(arr1.reduce(sum));

let arr2 = [{ name: "chandu", email: "chandu@gmail.com" }, { name: "sagar", email: "sagar@gmail.com" }, { name: "ram", email: "ram@gmail.com" },{ name: "chandu", email: "chandu@gmail.com" }]


let arr3 = arr2.filter((x, i, a) => { return (x.name !== "chandu" && x.name !== "ram") });
// console.log(arr3);

// import axios from "axios"
// import { LIST_TYPE_DATA } from "./type";


// export const userList = (data) => async (dispatch) => { 
//   try {
//     let res = await axios.get('http://localhost:3000/userlist', data);
//     return res.data;
//   } catch (err) { 
//     return err.data ? err.data : err;
//   }
// dispatch({type:LIST_TYPE_DATA,payload:[]})
// }


const reduce1 = (value, index) => value;

// console.log(arr2.reduce(reduce1));

let arr5 = [2, 3, 4, 5, 6, 2, 5, 7, 1, 7, 3]


arr5 = arr5.filter((x, i, a) => a.indexOf(x) === i);
// arr5 = arr5.filter((x, i, a) => x===7);



let count = 0;
for (let arr of arr5) { 
  count += arr;
 
}
//  console.log(count);


let newData = [{ name: "chandu", email: "c@gmail.com" }, { name: "sagar", email: "b@gmail.com" }]


newData.sort((a,b)=> b.length-a.length);

console.log(newData)


let arrMax = [1, 3, 5,55, 6,12, 7, 1];

function max(acc,val) { 
  if (val>acc) { 
     acc=val
  }
  return acc
}
// let biggest = arrMax.reduce(max);

// let biggest = arrMax.reduce((acc,val)=> { 
//   if (val>acc) { 
//      acc=val
//   }
//   return acc
// });

let biggest = arrMax.reduce((a,b)=> a>b ? a:b);
console.log(biggest);









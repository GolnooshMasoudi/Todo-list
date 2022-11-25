// nodejs: v5    
//module.exports =  sum       const sum = required("./main.js")
//module.exports = { sum , test1, test2}      const {sum , test1, test2} = required("./main.js")

// react : v6
// export default sum               import sum from "./main.js"
// export { sum , test1, test2 }     import { sum , test1, test2} from "./main.js"


const todos=[
    {
      id:"1",
      title:"hello",
      status: "undone"
    },
    {
      id:"2",
      title:"salam",
      status: "undone"
    },
    {
      id:"3",
      title:"hey",
      status: "undone"
    },
    {
      id:"4",
      title:"hi",
      status: "undone"
    },
  ]

//   const result =todos.map(function(item){
//         // return item
//         if (item.title=="hello") {
//             return item;
            
//         }
//   })

//   console.log(result);

//   todos.map(function(item){
//     console.log(item);
// })

//array:
const numbers= [1, 2, 3, 4, 5];
const useState= ["state", "setState"];

const [x,y]= useState;

// const num1= numbers[0];
// const num2= numbers[1];

const [num1, ,num2]= numbers

// console.log(num1); // 1
// console.log(num4); //2


//object
// const profile = { firstName: "Zahra", lastName: "Yazdani" };
// // const fn= profile.firstName;
// // const ln= profile.lastName;

// const {firstName, lastName}=profile
// console.log(firstName);
// console.log(lastName);



// const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;





//   const btns= document.querySelectorAll("add-to-card")//list

//   btns.forEach(function(item){

//         console.log(item);
//   })

//   for (let i = 0; i < btns.length; i++) {
//     console.log(btns[i]);
 
//   }



// Spread Operator syntax:
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
arr1 =arr1.concat(arr2)
console.log(arr1); // [3, 4, 5, 0, 1, 2]
arr1 = [...arr2, 100];


console.log(arr1); // [3, 4, 5, 0, 1, 2, 100]



const obj1 = { foo: 'bar', x: 42 };

const obj2= {t:23, ...obj1, y:56};



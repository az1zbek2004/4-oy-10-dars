// const user = {
//     name: "Ali",
//     age: 21,
//     about: function() {
//         console.log("hello");
//     }
// };


// // let cloneUser = Object.assign((), user);
// // let cloneUser = JSON.parse(JSON.stringify(user));


// user.age = 12;

// console.log(cloneUser);


// let dars = "Frontend";

// let dars1 = dars.slice(2, 4);

// console.log(dars1);


// 1-masala 
// let satr = "hello";
// function satrSection(arg) {
//     let satr1="";
//     for (let i = arg.length; i >= 0; i--) {
//         satr1+=arg.charAt(i);   
//     }

//     return satr1;
// }
// console.log(satrSection(satr));


// 2-masala
// let satr = "salom dunyo";

// function unliSatr(arg) {
//     // let satr1 = "";
//     let counter = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg.charAt(i)=="a"||arg.charAt(i)=="e"||arg.charAt(i)=="i"||arg.charAt(i)=="o"||arg.charAt(i)=="u") {
//             counter++;
//         }
//     }
//     return counter;
// }


// console.log(unliSatr(satr));


// 3-masala 
// let satr = "quruq"; //palindrom

// let palindrom = (arg) => {
//     let satr1="";
//     let a;
//     for (let i = arg.length; i >= 0; i--) {
//             satr1+=arg.charAt(i);        
//     }

//      if (arg==satr1) {
//        a=true;
//     } else {
//        a=false;
//     };

//     return a;
// }


// console.log(palindrom(satr));

// 4-masala 
let satr = "salom dunyo Assalomu Alaykum";

let uzunSatr=function (arg) {
    let satr1=arg.split(" ");
    

    let engUzunSoz="";
    let engUzunUzunlik=0;

    for (let i = 0; i < satr1.length; i++) {
        if (satr1[i].length > engUzunUzunlik) {
            engUzunUzunlik=satr1[i].length;
            engUzunSoz=satr1[i];
        } 

    }

       
    return engUzunSoz;
}

console.log("Eng uzun so'z:", uzunSatr(satr));




// 5-masala 
// let satr = "salom dunyo";

// const bigLetter = function(arg){
//     let satr1=arg.charAt().toUpperCase()+arg.substring(1, arg.length);
//     return satr1;
// }

// console.log(bigLetter(satr));


// 6-masala 
// let satr="aabbdddefffff";  //a2b2d3e1f

// const shortSatr = (arg) => {
//     let compresString="";
//     let counter=1;

//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i]===arg[i+1]) {
//              counter++;
//         } else {
//             compresString+=arg[i]+counter;
//             counter=1;
//         }        
//     }

//     return compresString;
// }


// console.log(shortSatr(satr));
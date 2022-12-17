// var a="coding is a fun!"
// const res=a.split('')
//             .reverse()
//             .join('');
// console.log(res)

let readlineSync = require("readline-sync");
let num=readlineSync.questionInt("enter a number");
// var a="coding is a fun!"
const res=num.split('')
            .reverse()
            .join('');
// console.log(res)
if (num==res){
    console.log("plindrom no")
}
else{
    console.log("not a plindrom no")
}

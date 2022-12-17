// let arr=[2,6,8,3]
// var a=arr.map((value)=>{
//     // console.log(value)
//     return value + 2
// })
// console.log(a)


let arr=[2,6,8,3]
var a=arr.map((value,index)=>{
    console.log(value,index)
    return value + 2
})
console.log(a)
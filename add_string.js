// a=["1","2","3"]
// l=[]
// for (i of a){
//     l.push(String(Number(i)+1))
// }
// console.log(l)


a=["1","2","3"]
var l=[]
for (i of a){
    var k=Number(i)
    l.push(String(k+1))
}
console.log(l)
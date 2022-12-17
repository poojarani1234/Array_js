var a=["a","b","c","a","b"];
var l = [];
for(i of a){
    if(!l.includes(i)){
        l.push(i);
    }
}
// console.log(l)
for(j of l){
    var count=0
    for(i2 of a){
        if (i2==j){
            count+=1
        }
    }console.log(j,count)
}
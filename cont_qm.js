var list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
uniques=[]
for(var i of list){
   if(!uniques.includes(i)){
       uniques.push(i)
   }
}
console.log(uniques);

for(var j of uniques){
   count=0
   for(var k of list){
       if (j == k){
           count+=1
       }
   }
   console.log(j,count," times");
}
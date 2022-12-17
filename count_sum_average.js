var num= [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var count_odd=0;
var sum_odd=0;
var sum_even=0;
var count_even=0;
for(var i of num){
   if(i%2 ==0){
       sum_even+=i;
       count_even+=1;
   }
   else{
       sum_odd+=i;
       count_odd+=1;
   }
}
console.log((sum_even+sum_odd)/2);
console.log(count_odd);
console.log(count_even);
console.log(sum_odd);
console.log(sum_even);
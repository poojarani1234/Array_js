var num = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]; 
var even_a=0
var odd_a=0
for( var i of num){
    if (i%2==0){
        even_a+=i
    }
    else{
        odd_a+=i
    }

}
console.log(even_a)
console.log(odd_a)

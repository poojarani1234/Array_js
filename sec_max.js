var number=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max=0;
let sec_max=0
for(var i=0; i<=number.length;i++ )
 if (number[i]>max){
       max=number[i]
   }
for (var j=0; j<=number.length;j++){
    if (number[j]>sec_max && number[j]<max ){
        sec_max=number[j]
    }

}
console.log(max,sec_max)
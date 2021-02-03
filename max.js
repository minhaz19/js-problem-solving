var number=[45,66,7,3,4,32,3,556,6,7,434,666,4343,4,77,4,5649777,56,4,667898,9];
// var max= number[0];
for(var i =0; i<=number.length; i++){
    // var marks= number[i];
    if(number[i]>number[0]){
        number[0] = number[i];
    }
}
console.log(number[0]);
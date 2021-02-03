var number = [12,2,4,5,7,2,5,98,90,6,8,6,4,2,1,96,4];
var duplicateNumber = [];
for(var i = 0; i<number.length; i++){
    var element = number[i];
    var index = duplicateNumber.indexOf(element);
    if(index == -1){
        duplicateNumber.push(element);
    }
}
console.log(duplicateNumber);


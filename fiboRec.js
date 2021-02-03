function fiboRecursive(num){
 
    if(num==0){
        return 0;

    }
    if(num==1){
        return 1;        
    }
    else{
        return fiboRecursive[num-1]+fiboRecursive[num-2];
    }
}
var result = fiboRecursive(5);
console.log(result);
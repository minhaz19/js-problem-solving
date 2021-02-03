var studentId = [22,34,232,12,4,56,223,5,3,6,66,2];

// const result = studentId.map( x => x*x);
// console.log(result);

// const even = studentId.filter(x => x%2==0)
// console.log(even);

// const findFirst = studentId.find(x => x/3)
// console.log(findFirst);

function isEven(x) {
    if (x%2===0) {
        return x;
    }
    
}
const result = studentId.filter(isEven);

console.log(result);
var string ="Hi I am Minhaz.    I am a student of CSE in  Islamic Univarsity Chittagong."
var count = 0;
for(var i =0; i<string.length; i++){
    var speech= string[i];
    if(speech == " " && speech[i-1] !=" ")
    {
        count++;
    }
    
}
count++;
console.log(count);
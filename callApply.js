const normalPerson ={
    firstName : "suraiya",
    lastName : "sultana",
    salary:10000,
    getFullName(){
        console.log(this.firstName,this.lastName)
    },
    chargeBill: function(amount,tips,tax){
        this.salary = this.salary - amount - tips - tax;
        console.log(this);
        return this.salary;
        
    }
}
const friendlyPerson = {
    firstName:"Minhazul",
    lastName : "Abedin",
    salary: 40000
}

const dashingPerson = {
    firstName:"SM",
    lastName : "Shouhug",
    salary: 70000
}
// normalPerson.chargeBill(2000);
// console.log(normalPerson.salary);
// const friendlyPersonBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPersonBill(2000);
// friendlyPersonBill(4000);
// friendlyPersonBill(9000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson,4000,400,40);
// normalPerson.chargeBill.call(dashingPerson,4000,599,45);

normalPerson.chargeBill.apply(friendlyPerson,[3000,50,100])
normalPerson.chargeBill.apply(dashingPerson,[6000,500,100])
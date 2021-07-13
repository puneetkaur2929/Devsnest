const student1={
    Name:'Rohan',
    Grade:10,
    getname:function(teacher){
        console.log(this);
        console.log(teacher +" teaches "+ this.Name)
    }
}
const student2={
    Name:"Lakshita",
    Grade:+2,
    
}

student1.getname.call(student2,"Mr Kshitiz");
student1.getname.apply(student2, ['Ms.Reenu']);
const future_record=student1.getname.bind(student1, "Mr sanjeev");
const future_record2=student1.getname.bind(student2, "Mr sanjeev");
future_record();
future_record2();

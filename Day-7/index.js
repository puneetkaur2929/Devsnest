1
function getproperty(student){
var arr=[];
for(let item in student){
    arr.push(item);
}
console.log(arr);
} 
const student ={ 
    name : "David Rayy",
     sclass : "VI", 
     rollno : 12 
   }; 
getproperty(student);
 
2
const student = { 
    name : "David Rayy",
     sclass : "VI", 
     rollno : 12 
    }; 

    console.log(student);
    delete student.rollno;
    console.log(student);

3
function getlength(student){
   
    var length=0;
    for(let item in student){
        length++;
    }
    console.log("length of given object is " + length);
}
var student = { name : "David Rayy", sclass : "VI", rollno : 12,age:12 }; 
getlength(student);

4

function books_record(author,name,status){
    this.book_title=name;
    this.book_author=author;
    this.readingtstaus=status;
}

const first=new books_record('Bill Gates','The Road Ahead', true );
const second=new books_record('Steve Jobs','Walter Isaacson', true );
const third=new books_record('Suzanne Collins','Mockingjay: The Final Book of The Hunger Games',false);
console.log(first);
console.log(second);
console.log(third);

5
function volume(radius,height){
    var vol=Math.PI*radius*radius*height;
    console.log(vol.toFixed(4));
}
volume(20,499);

// 6
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
library.sort((obj1,obj2)=>{
    return ( obj2.libraryID-obj1.libraryID);
})
console.log(library);
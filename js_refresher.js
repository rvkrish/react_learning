/*
Understand var vs let vs const
/*




//------------------------------------------------------------------------------------------------------------ 



Arrow Functions:

The below two functions are same.

*/

function testFunctionOne(){
    console.log("hello from test 1")
}

const testFunctionTwo = ()=> {
    console.log("hello from test 2")
} 

testFunctionOne();
testFunctionTwo();


//The below two functions are same. If we have only one parameter for arrow functons small paranthisis is optional

function printMyNameOne(name){
    console.log(name+"from printMyNameOne");
}

const printMyNameTwo = (name) =>  {
    console.log(name+"from printMyNameTwo");
}

const printMyNameThree = name =>  {
    console.log(name+"from printMyNameThree");
}

printMyNameOne("My Name");
printMyNameTwo("My Name");
printMyNameThree("My Name");

//The below two functions are same.

function printMyNameAgeOne(name,age){
    console.log(name+"from printMyNameOne");
    console.log(age+"from printMyNameOne");
}

const printMyNameAgeTwo = (name,age) =>  {
    console.log(name+"from printMyNameTwo");
    console.log(age+"from printMyNameTwo");
}

printMyNameAgeOne("My Name",20);
printMyNameAgeTwo("My Name",21);


//How the arguments are returned, Below three functions are same. if we omit flower brackets then we can write a single line of code which will be returned 

function multiplyOne(num1,num2){
   return num1*num2;
}

const multiplyTwo = (num1,num2) =>  {
    return num1*num2;
}

const multiplyThree = (num1,num2) =>  num1*num2;


console.log(multiplyOne(2,4))
console.log(multiplyTwo(2,4))
console.log(multiplyThree(2,4))

// No More issues with ** this ** keyword if we use arrow function.


//------------------------------------------------------------------------------------------------------------ 


/* Imports and exports using JS */









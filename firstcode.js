/*console.log("javascript code start");
$_name=123;
console.log("$_name");
const Details={

  name: "chaudhary kiran kumari",
  age: "21",
  college : "gla university"

}
console.log(Details);
const product={
  productName:"hand made pen",
  price:500,
  offer:"23%",
  rating:4,

};*/
//here example of arithmetic operator
/*let number=24;
console.log(number);
number++;
console.log(number);
number--;
console.log(number);
secondNumber=45;
console.log("number + secondNumber =", number + secondNumber);
console.log("number * secondNumber =", number * secondNumber);
console.log("number / secondNumber =", number / secondNumber);
console.log("number % secondNumber =", number % secondNumber);
console.log("number ** secondNumber =", number ** secondNumber);
let b=2;
console.log("b++=",b++);
console.log(b); */
//here example of comparison operator
/*let n=23
v=23
console.log("equal to=",n==v);
console.log(" not equal to=",n!=v);
console.log("equal to and type=",n===v);
console.log("not equal to and type=",n!==v);*/
//if else condition example
/*let student1=45
let student2=20
if (student1>=30){
  console.log("student1 =pass");
}else{
  console.log("student1=fail");
}
if(student2>=30){
  console.log("student2 =pass");

}else{
  console.log("student2=fail");
}
let c;
let a=20;
let b=10;
if(a===b){
  c=a+b;
}else{
  c=a-b;
}
console.log(c);
console.log(a,b);
//else if condition
let class1=30;
let class2=70;
let class3=90;

if(class1>=80){
  console.log("class1 is above average");
} else if(class1<50){
  console.log("class1 is below class");
} else {
  console.log("class1 is average the average class");
}

if(class2>=80){
  console.log("class2 is above average");

} else if(class2<50) {
  console.log("class2 is below class");

} else{
  console.log("class2 is average class");
}

if(class3>=80){
  console.log("class3 is above average");

} else if(class3<50){
  console.log("class3 is below class");

} else{
  console.log("class3 is average class");

}*/
//example of prompt

/*let number=prompt("enter your number");
console.log(number);
if (number%5==0){
  console.log("number is divided by 5");
} else{
  console.log("number is not divided by 5");
}*/
// another example of if else

/*let marks=prompt("enter your marks");
let grade;
if (marks<=49){
   grade="F";
} else if(marks<=59){
   grade="D";
} else if (marks<=69){
   grade="C";
} else if (marks<=89){
   grade="B";
} else if(marks<=100){
   grade="A";
}
console.log("your grade is", grade);*/
//example of loop :for loop
/*let sum=0;
for (let i=0;i<=5;i++){
  sum=sum+i;
}
console.log (sum);*/
/*let i=1;
while(i<=5){
  console.log("i=",i);
  i++;
}*/
/*let str="chaudhary kiran kumari";
for (let val of str){
  console.log(val);
}
let student={
  name:"kiran",
  age:21,
  cgpa:8.9,
  ispass:"true",
};
for (let key in student) {
  console.log("key=",key, "value=",student[key]);
};*/

/*for (i=0;i<=100;i++){
  if(i%2===0){
  console.log("even number is",i);
  }
}*/

//practice question

/*let num=33;
let guess=prompt("guess the game number");
if(num!=guess){
  guess=prompt("you enter the wrong number,try again:");
}else{
  console.log("good job you guess the right number",num);
}*/

//strings

/*let str="chaudhary\tkiran";
console.log(str.length);
console.log(str);*/
//string templete
/*let obj={
  name:"nishi",
  age:21,
  education:"postgraduation",
  ispass:true,
};
output=`name of the student is ${obj.name} and age ${obj.age}`;
console.log(output);*/

//practice question
/*let name=prompt("enter your full name");
len=name.length;
//console.log(len);
str2="@";
let NewName=str2.concat(name);
let username=NewName.concat(len);
console.log(username);
let user="@"+name+name.length;
console.log(user);*/

//practice question

/*let marks=[98,45,66,46,44,95];
let sum=0;
for (let i=0;i<marks.length;i++){
  sum=sum+marks[i];
  console.log(sum);
}
avg=sum/marks.length;
console.log(avg);*/

//practice question

/*let items=[550,245,300,653];
let per=0;
for(let i=0;i<items.length;i++){
  per=items[i]/10;
  items[i]-=per;
}console.log(items);

let company=["bloomberg","microsoft","uber",'google','ibx','netflix'];
company.push("amazon");
//console.log(company.push("amazon"));*/

//example of function

/*function sum(n1,n2){
  s=n1+n2;
  return s;
}
let val =sum(55,45);
console.log(val);

//example of arrow function

const multi=(a,b)=>{
  m=a*b;
  return m;
}
console.log(multi(10,11));*/

//practice question

/*function countVowel(str){
  let count=0;
  for (let char of str){
    if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
      count++;
    }

  }
  return count;
}*/

//same question but in form arrow

/*const vowel =(str)=>{
  let count=0;
  for (let char of str){
    if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
      count++;
    }
  }
  return count;
} */

  //example of forEach loop

/*let arr=["chaudhary","kiran",'kumari'];

arr.forEach((val)=>{
  console.log(val);
});*/

//practice question

/*let arr=[1,2,3,4,5];
arr.forEach((val) => {
  console.log(val*val);  
});*/

//example of map

/*let arr=[1,2,3,4,5];
let newArry=arr.map((val) => {
  return val*val;  
});
console.log(newArry);
console.log(arr);*/

//practice question

/*let arr=[56,89,99,92,49,90,93,];

let newArry=arr.filter((val)=>{
  return val>90;
});
console.log(newArry);*/

//practice question

/*let num=prompt("enter a number");

let numarr =[];
for(let i=1; i<=num; i++) {
  numarr[i-1]=i;

}
console.log(numarr);

const sumarr = numarr.reduce((prev,curr)=>{

  return prev+curr;

})
console.log(sumarr);

const proarr = numarr.reduce((prev,curr)=>{

  return prev*curr;

})
console.log(proarr);*/

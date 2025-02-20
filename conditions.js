// conditions //

// var maths = 95;
// var English = 99;
// var Science = 85;

// var sum = (maths+English+Science)


// if (sum>=100 && maths<90) {
//     console.log("Megha is clever Girl")
// }
// else{
//     console.log("Megha is Cute is bachhi !")
// }

// console.log(sum);

// Program Excercise Start

// 1. Write a program that checks if a number is even or odd.
// even : 2;
// odd : 1;


// var number = 25;

// if(number % 2 ===0){
//     console.log("This Number is odd")
// }else
// {
//     console.log("This Number is even")
// }

// 2 .Write a program that determines whether a given number is positive or negative.

// var wether = 20;

// if (wether>0){
//     console.log("this number is positive");
// }
// else{
//     console.log("this number is negitve")
// }

// 3. Write a program to determine the greater of two numbers.

// var a = 50;
// var b = 30;

// if (a>b){
//     console.log("a is greater then b")
// }
// else {
//     console.log("b is greater then a")
// }

// 4. Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).

// var marks = -5;

// if((marks>50) && (marks<=100)){
//     console.log("A");
// }
// else if((marks<50) && (marks>=33)){
//     consoloe.log("B");
// }
// else if((marks<33) && (marks>0)){
//     console.log("fail")
// }
// else{
//   console.log("invaild marks")
// }

// 5. Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.


var age = -1;

if((age<=12) && (age>0)){
    console.log("Ticket Price of 5");
}
else if ((age>12) && (age<=18)){
    console.log("Ticket Price of 10")
}
else if ((age>18) && (age<60)){
    console.log("Ticket Price of 20")
}
else if (age>=60){
    console.log("Ticket Price of 15")
}
else{
    console.log("You are not vaild age buy Ticket")
}


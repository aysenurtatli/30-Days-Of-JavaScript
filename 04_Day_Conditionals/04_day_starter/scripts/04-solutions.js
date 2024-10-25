//Exercises: Level 1

//1
/*
const age = prompt('Enter your age:');
const remainAge = 18 - age; 
yourAge >= 18 ? console.log('You are old enough to drive') : console.log(`You are left with ${remainAge} years to drive.`);
*/

//2
/*
const myAge = 23;
const yourAge = prompt('Enter your age:');
yourAge > myAge ? console.log(`You are ${yourAge - myAge} years older than me.`) : console.log(`I am ${myAge - yourAge} years older than you.`);
*/

//3
const a = 1;
const b = 3;
//using if-else
if (a > b){
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
};
//using ternary operator
console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

//4
/*
const num = prompt('Enter a number:');
if (num % 2 === 0 ){
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
}
*/

//Exercises: Level 2
//5
/*
const score = prompt('Enter your score:');
if (score >= 80 && score <= 100){
    console.log(`Your score is ${score}, your grade is A`);
} else if (score >= 70 && score <= 89){
    console.log(`Your score is ${score}, your grade is B`);
} else if (score >= 60 && score <= 69){
    console.log(`Your score is ${score}, your grade is C`);
} else if (score >= 50 && score <= 59){
    console.log(`Your score is ${score}, your grade is D`);
} else if (score >= 0 && score <= 49){
    console.log(`Your score is ${score}, your grade is F`);
} else {
    console.log('Enter a valid score');
}
*/

//6
/*
const season = prompt('Enter a month:').toLowerCase();
switch (season){
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn.');
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter.');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring.');
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer');
        break;    
    default: 
    console.log('Enter a valid month');                          
}
*/
//7
/*
const day = prompt('What day is today ?:').toLowerCase();
switch (day){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day} is a working day.`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${day} is a weekend.`);
        break;
    default:
        console.log('Enter a day.');                        
}
*/
//Exercises Level 3

//1
const month = prompt('Enter a month:').toLowerCase();
switch (month){
    case 'january':
    case 'may':
    case 'july':
    case 'october':
    case 'december':
    case 'august':
    case 'march':    
        console.log(`${month} has 31 days`);
        break;
    case 'april':   
    case 'september':
    case 'november':
    case 'june':    
        console.log(`${month} has 30 days`);
        break;
    case 'february':
       console.log(`${month} has 29 days`);
          break;
    default:
        console.log('Enter a month');                       
}




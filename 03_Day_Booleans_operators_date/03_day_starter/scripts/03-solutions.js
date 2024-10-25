//Exercises: Level 1

//1
const firstName = "Aysenur";
const lastName = "Tatli";
const country = "Turkey";
const city = "Bolu";
const age = 23;
const isMarried = false;
const year = 2024;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//2
console.log(typeof "10" === typeof 10);

//3
console.log(parseInt("9.8") === 10);

//4
console.log("hello");
console.log(10);
console.log(true);

console.log("");
console.log(0);
console.log(``);

//5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log("python".length !== "jargon".length);

//6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
console.log(!("dragon".includes("on") && "python".includes("on")));

//7
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Math.floor(now.getTime() / 1000));

//Exercises: Level 2

//1
/*
let base = parseFloat(prompt("Enter base:"));
let height = parseFloat(prompt("Enter heigth:"));
const calc = 0.5 * base * height;
console.log(calc);

//2
let a = parseFloat(prompt("Enter side a:"));
let b = parseFloat(prompt("Enter side b:"));
let c = parseFloat(prompt("Enter side c:"));
const calculate = a + b + c;
console.log(calculate);

//3
let length = parseFloat(prompt("Enter length:"));
let width = parseFloat(prompt("Enter width:"));
let perimeter = 2 * (length + width);
let area = length * width;
console.log(`area ${area}, perimeter ${perimeter}`);

//4
let radius = parseFloat(prompt("Enter circumference:"));
let circumference = 2 * Math.PI * radius;
let circleArea = Math.PI * radius * radius;
console.log(`Area: ${circleArea}, Circumference: ${circumference}`);
*/
//5
const slope = 2;
const yIntercept = -2;
const xIntercept = (yIntercept * -1) / slope;
console.log(
  `slope: ${slope}, x-intercept: ${xIntercept}, y-intercept: ${yIntercept} `
);

//6
const x1 = 2,
  y1 = 2;
const x2 = 6,
  y2 = 10;
const slope2 = (y2 - y1) / (x2 - x1);
console.log(slope2);

//7
console.log(slope === slope2); //true

//8
let xValue = [-3, -2, -1, 0, 1, 2, 3];
for (let x of xValue) {
  let y = x * x + 6 * x + 9;
  console.log(`x = ${x}, y = ${y} `);
}

//9
/*
let enterHours = parseFloat(prompt("Enter hours:"));
let ratePerHour = parseFloat(prompt("Enter rate per hour:"));
let earning = enterHours * ratePerHour;
console.log(`Your weekly earning is ${earning}`);
*/

//10
/*
let name = prompt("Enter Your Name:");
let message = "";
if (name.length > 7) {
  message = "Your name is long";
} else {
  message = "Your name is short";
}
console.log(message);
*/

//11
/*
let yourFirstName = prompt("Enter your name:");
let yourLastName = prompt("Enter your last name:");
if (yourFirstName.length > yourLastName.length) {
  console.log(
    `your first name, ${yourFirstName} is longer than your family name, ${yourLastName}`
  );
} else {
  console.log(
    `your first name, ${yourFirstName} is shorter than your family name, ${yourLastName}`
  );
}
*/
//12
let myAge = 250;
let yourAge = 25;
let message = `I am ${myAge - yourAge} years older than you.`;
console.log(message);
/*
//13
let birthYear = parseFloat(prompt("Enter your birth year:"));
let currentYear = new Date().getFullYear();
let your_age = currentYear - birthYear;
let messageTwo =
  your_age < 18
    ? `You are ${your_age}. You will be allowed to drive after ${
        18 - your_age
      } years`
    : `you will drive`;
console.log(messageTwo);
*/
//14
/*
let yearNumber = parseFloat(prompt("Enter number of year:"));
let calculate = yearNumber * 365 * 24 * 60 * 60;
console.log(`you lived ${calculate} seconds`);
*/
let yearNumber = parseFloat(prompt("Enter a year:"));

let calculate = (x) => yearToHour(100 - yearNumber);
let yearToHour = (yearNumber) => yearNumber * 365 * 24;

let calc = calculate(yearNumber);
console.log(calc <= 0 ? "R.I.P" : `you lived ${calc} seconds`);

//15
let currentTime = new Date();
let currentYear = currentTime.getFullYear();
let currentMonth = currentTime.getMonth();
let currentDate = currentTime.getDate();
let currentHour = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();

console.log(
  `${currentYear}-${currentMonth}-${currentDate} ${currentHour}:${currentMinutes}`
);
console.log(
  `${currentDate}-${currentMonth}-${currentYear} ${currentHour}:${currentMinutes}`
);
console.log(
  `${currentDate}/${currentMonth}/${currentYear} ${currentHour}:${currentMinutes}`
);

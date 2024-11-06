//Exercises: Level 1

//1
/*
function fullName(){
    console.log('Aysenur Tatli');
}
fullName();
*/

//2
function fullName(firstName, lastName){
    let fullName = `${firstName} ${lastName}`;
    return fullName;
}
console.log(fullName('aysenur', 'tatli'));

//3
const addNumbers = (param1, param2) => param1 + param2;
console.log(addNumbers(4, 5));

//4
const areaOfRectangle = (length, width) => {
    let area = length * width;
    return area;
}
console.log(areaOfRectangle(20, 30));

//5
const perimeterOfRectangle = (length, width) => 2 * (length + width);
console.log(perimeterOfRectangle(20, 50));

//6
const volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(20, 10 ,50));

//7
const areaOfCircle = (pi, r) => pi * r * r;
console.log(areaOfCircle(Math.PI, 5));

//8
const circumOfCircle = (r) =>{
    let circumference = 2 * Math.PI * r;
    return circumference;
}
console.log(circumOfCircle(6));

//9
const density = (mass, volume) => mass / volume;
console.log(density(50, 5));

//10
const speed = (distance, time) => distance / time;
console.log(speed(1000, 30));

//11
const weight = (mass, gravity = 9.81) => mass * gravity;
console.log(weight(40));

//12
const convertCtoF = c => {
    return (c * 9/5) + 32;
}
console.log(convertCtoF(60));

//13
function index(weight, height){
    let calcIndex = Math.floor(weight / (height * height));
    
    if (calcIndex < 18.5){
        console.log(`your BMI is ${calcIndex}, You are Underweight`);
    } else if (calcIndex > 18.5 && calcIndex < 24.9){
        console.log(`your BMI is ${calcIndex}, You are Normal weight`);
    } else if (calcIndex > 25 &&  calcIndex < 29.9){
        console.log(`Your BMI is ${calcIndex}, You are Overweight`);
    } else {
        console.log(`Your BMI is ${calcIndex}, You are Obese`);
    }
    return calcIndex;
}
index(140, 1.90);

//14
function checkSeason(month){
    let season = '';
    
    switch (month.toLowerCase()){
        case 'september':
        case 'october':
        case 'november':
            season = "Autumn";
            break;
        case 'december':
        case 'january':
        case 'february':
            season = "Winter";
            break;
        case 'march':
        case 'april':
        case 'may':
            season = "Spring";
            break;
        case 'june':
        case 'july':
        case 'august':
            season = "Summer";
            break;                               
    } return season;
}
console.log(checkSeason('nOVEMBER'));

//15
const findMax = (param1, param2, param3) => {
    let max = param1;
    if (param2 > max){
        max = param2;
    }
    if(param3 > max){
        max = param3;
    }
    return max;
}
console.log(findMax(2, 1, 5));

//Exercises: Level 2

//3
const printArray = function(arr){
    for (const i of arr){
        console.log(i);
    }
};
printArray(['hello','hi', 'heello']);

//4
function showDateTime(){
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    console.log(`${month}/${date}/${year} ${hour}:${minutes}`)
    }
showDateTime();

//5
const swapValues = (a, b) => {
  return [b, a];
}
let x = 4;
let y = 5;
console.log(swapValues(x,y));

//6
const reverseArray = array1 =>{
    let reverse =[];
    for (let i = array1.length -1; i >= 0; i--){
        reverse.push(array1[i]);
       
    }
    return reverse;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['A', 'B', 'C']));

//7
const capitalizeArray = arr =>{
    let capitalized = [];
    for (const element of arr){
        capitalized.push(element.toUpperCase());
    }
    return capitalized;
}
console.log(capitalizeArray(['aysenur']));

//8
const items = [];
const addItem = item =>{
    return items.push(item);
}
console.log(addItem("ayse"));
console.log(items);

//9
const removeİtems = ['a', 'b', 'c'];
const removeItem = (arr,index) => {
return removeİtems.splice(index, 1);
}
console.log(removeItem(0, 2))

//10
const sumOfNumbers = number => {
    let sum = 0;
    for (let i = 1; i <= number; i++){
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(10));

//11
const sumOfOdds = number => {
    let sumOdds = 0;
    for (let i = 1; i <= number; i++){
        if (i % 2 !== 0){
            sumOdds += i
        }
    }
    return sumOdds;
}
console.log(sumOfOdds(10));

//12
const sumOfEven = number => {
    let sumEven = 0;
    for (let i = 1; i <= number; i++){
        if (i % 2 === 0){
            sumEven += i;
        }
    }
    return sumEven;
}

console.log(sumOfEven(6));

//13
const evensAndOdds = positiveparam => {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i <= positiveparam; i++){
        console.log(i);
        if (i % 2 === 0){
            evenCount++;
            console.log('a');
        }if(i % 2 !== 0) {
            oddCount++;  
            console.log('b');
        }
   }
    return [evenCount, oddCount];
}
   const result = evensAndOdds(100); 
   console.log(result);

    console.log(`The number of odds are ${result[1]}`);
    console.log(`The number of evens are ${result[0]}`);
    
//14
function sumOfArguments(...numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
const sumOfArgResult = sumOfArguments(1, 2, 3);
console.log(sumOfArgResult);

//15

// function randomUserIp(){
//     function randomNum(){
//         return Math.floor(Math.random()* 256);
//     }
//     return `${randomNum()}.${randomNum()}.${randomNum()}.${randomNum()}`;
// }

//     const randomIp = randomUserIp();
//     console.log(randomIp);

const randomUserIp = () => {
    let ip = "";
    for (let i = 0; i < 4; i++){
        let randomIp = Math.floor(Math.random() * 256);
        ip += randomIp;
        if (i < 3){
            ip += ".";
        }
    }
    return ip;
}

const randomIpGenerator = randomUserIp();
console.log(randomIpGenerator);

//16
const randomMacAddress = () => {
    const characters = "0123456789ABCDEF";
    let address = "";
    for (let i = 0; i < 6; i++){
        address += characters.charAt(Math.floor(Math.random()* 15));
        address += characters.charAt(Math.floor(Math.random()* 15));
        if (i < 5){
            address += ":";
        }
    }
    return address;
}

const randomMacAddressGenerator = randomMacAddress();
console.log(randomMacAddressGenerator);

//17
const randomHexaNumberGenerator = () => {
    const characters = "0123456789abcdef"
    let hexaNumber = "";
    for (let i = 0; i < 6; i++){
        hexaNumber += characters.charAt(Math.floor(Math.random()* 15));
    } 
    return hexaNumber;
}
const randomHexNumber = "#" + randomHexaNumberGenerator();
console.log(randomHexNumber);

//18
// const userIdGenerator = () => {
//     const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let userId = "";
//     for (let i = 0; i < 7; i++){
//         userId += characters.charAt(Math.floor(Math.random() * characters.length)-1);
//     }
//     return userId;
// }

// const UserIdGen = userIdGenerator();
// console.log(UserIdGen);

//Exercises: Level 3

//1
// const userIdGeneratedByUser = () => {
//     const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let userId = [];
    
//     const characterNumber = prompt('How many characters do you want in ID?:');
//     const idNumber = prompt('How many ID do you want?:')
//     for (let x = 1; x <= idNumber; x++){
//         let word = "";
//         for (let i = 0; i < characterNumber; i++){
//            let randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
//            word += randomChar;
//         }
//       userId.push(word);
//     }
    
//     return userId;
// }

// const UserIdGen = userIdGeneratedByUser();
// console.log(UserIdGen);

//2
const rgbColorGenerator = () => {
    let generator = "";
    for (let i = 0; i < 3; i++){
        let randomNumber = Math.floor(Math.random()* 256);
        generator += randomNumber;
        if (i < 2){
            generator += ".";
        }
    }
    return generator;
}

const rgbGenerator = rgbColorGenerator();
console.log(rgbGenerator);
    
//3
const arrayOfHexaColors = () => {
    let HexaColorArray = [];
    const character = "0123456789abcdef";
    let randomHexColorNumber = Math.floor(Math.random() * 20) +1;
    for (let x = 1; x <= randomHexColorNumber; x++){
        let characterPush = "#";
        for (let i = 0; i < 6; i++){
            let randomCharacter = character.charAt(Math.floor(Math.random()* 15));
              characterPush += randomCharacter;
    }
    HexaColorArray.push(characterPush);
    }
    return HexaColorArray;
}

const arrayOfHexaColorsResult = arrayOfHexaColors();
console.log(arrayOfHexaColorsResult);

//4 
const arrayOfRgbColors = () => {
    let rgbColorArray = [];
    let totalRgb = Math.floor(Math.random()* 100) + 1;
    
    for (let x = 1; x <= totalRgb; x++){
        let rgbColor = "";
        for (let i = 0; i < 3; i++){
            let randomNumberGenerator = Math.floor(Math.random()* 256);
            rgbColor += randomNumberGenerator;
             if(i < 2){
            rgbColor += ",";
            }
        }
        rgbColorArray.push(rgbColor);
        
    }
        return rgbColorArray;
}
const arrayOfRgbColorsResult = arrayOfRgbColors();
console.log(arrayOfRgbColorsResult);

//5
const convertHexaToRgb = hex => {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
      }
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);  
      return { r, g, b };
}

console.log(convertHexaToRgb(arrayOfHexaColors()[0]));

//6
function convertRgbToHexa(r, g, b){
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join('');
}
console.log(convertRgbToHexa(103, 98, 22));

//7
const generateColors = (colorType, number) => {
    function rgbGenerate(){
        let rgbColorArray = [];
        for (let x = 1; x <= number; x++){
            let rgbColor = "";
            for (let i = 0; i < 3; i++){
                let randomRgb = Math.floor(Math.random() * 256);
                rgbColor += randomRgb;
                if (i < 2){
                    rgbColor+= ",";
                }
            }
            rgbColorArray.push(rgbColor);
        }
        return rgbColorArray ;
        
    }
    function hexaGenerate(){
        let hexaColorArray = [];
        const character = "0123456789abcdef";
        for (let i = 1; i <= number; i++){
            let hexaColor = "#";
            for (let x = 0; x < 6; x++){
                let randomHexaColor = character.charAt(Math.floor(Math.random()* 15));
                hexaColor+=randomHexaColor;
            }
            hexaColorArray.push(hexaColor);
        }
        return hexaColorArray;
    }

    if (colorType === 'rgb'){
        return rgbGenerate();
    }

    if (colorType === 'hexa'){
       return hexaGenerate();
    }
}
console.log(generateColors('rgb', 3));

//8
const shuffleArray = array => {
    const shuffled = array.slice();
    for (let i = shuffled.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i],shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
const arr1 = ['a', 'b', 'c', 'd', 'f'];
const shuffledArray = shuffleArray(arr1);
console.log(shuffledArray);

//9
const factorial = num => {
    let result = 1;
    for (let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}
const factorialResult = factorial(5);
console.log(factorialResult);

//10
const isEmpty = param1 => {
    if (param1 === null || param1 === undefined){
        return true;
    }
    return false; 
}
console.log(isEmpty(null));

//11
const sum = number => {
    let result = 0;
    for (let i = 0; i <= number; i++){
        result += i
    }
   
    return result;
}

const sumResult = sum(30);
console.log(sumResult);

//12
const sumOfArrayItems = arr => {
    
   for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] !== "number"){
        return "Not a number";
    } 

    }
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        result += arr[i];
    }
        return result;
    }
    

const sumOfArrayItemsResult = sumOfArrayItems([1, 2, 3, 4]);
console.log(sumOfArrayItemsResult);

//13
const average = arr => {
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] !== "number"){
            return "not a number";
        }
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
       sum += arr[i];
    }
    let result = sum / arr.length;
    return result;
}
console.log(average([2, 3, 4, 5]));

//14
const modifyArray = arr => {
    for (let i = 0; i < arr.length; i++){
        if (arr.length < 5){
            return "item not found";
        } 
        arr[4] = arr[4].toUpperCase();
    }
    return arr;
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

//15
const isPrime = num => {
    if (num <= 1){
        return false;
    }
    if(num % 2 === 0){
        return false;
    }
    if (num === 2){
        return true;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(2));

//16
const unique = arr => {
    const uniqueItem = new Set(arr);
    return uniqueItem.size === arr.length;
}

console.log(unique([1, 6, 2, 4]));

//17
const sameDataType = arr => {
    let type = typeof arr[0];
    console.log(type);
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] != type){
            return false;
        }
    }
    return true;
}
console.log(sameDataType(["a", "b" ,"c"]));

//18
const isValidVariable = variable => {
    const validVariablePattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    return validVariablePattern.test(variable);
    }
    

console.log(isValidVariable(["ayse"]));

//19
const uniqueNumbers = () => {
    const array = new Set();
    
    while (array.size < 7){
        let randomNumbers = Math.floor(Math.random() * 9);
        array.add(randomNumbers);
    }
    return Array.from(array);
}
console.log(uniqueNumbers());

//20
const reverseCountries = (arr) => {
    const reversed = arr.slice()
    reversed.reverse();
    return reversed;
}
console.log(reverseCountries(countries));














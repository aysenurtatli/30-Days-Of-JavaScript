//Exercises: Level 1

//1
/*
for (let i = 0; i <= 10; i++){
    console.log(i);
}

let i = 0;
while(i <=10){
    console.log(i);
    i++
}
    
let i = 0;
do{
    console.log(i);
    i++
} while (i <= 10);
 */

//2
/*
for (let i = 10; i >= 0; i--){
    console.log(i);
}

let i = 10;
while (i >=0){
    console.log(i);
    i--;
}

let i = 10;
do{
    console.log(i);
    i--
} while ( i >= 0);

*/
//3
let n = 5;
for (let i = 0; i <= n; i++){
    console.log(i);
}

//4
for (let i = 1; i <= 7;i++){
    console.log('#'.repeat(i));
}

//5
for (let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}

//6
for (let i = 0; i <= 10; i++){
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

//7
for (let i = 0; i < 101; i+= 2){
    console.log(i);
}

//8
for (let i = 1; i < 100; i += 2){
    console.log(i);
}

//9
function prime(num){
    if (num <= 1){
        return false;
    }
    for (let i = 2; i <= 100; i++){
      if (num % i === 0){
        return false;
      }
      return true;
    }
}
for (let number = 1; number <= 100; number++){
    if(prime(number)){
        console.log(number);
    }
}

//10
let sum = 0;
for (let i = 0; i <= 100; i++){
sum += i;
} 
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//11
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < 101; i+= 2){
  evenSum += i;
}

for (let i = 1; i < 100; i+=2){
  oddSum += i ;
}
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`)

//12
console.log([`${evenSum}, ${oddSum}`])

//13
randomNums = [];
for (let i = 0; i < 5; i++){
    randomNums.push(parseInt(Math.random() * 10));
}
console.log(randomNums.sort());

//14
function generateUniqueRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 5) {
        const randomNumber = Math.floor(Math.random() * 10);
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
}
console.log(generateUniqueRandomNumbers().sort());

//14
const uniqueNumbers = [];
let isExistInArray = false;
for (let i = 0;   uniqueNumbers.length < 5; i++){
    const randomNumber = Math.floor(Math.random() * 10);
    isExistInArray = uniqueNumbers.find((element) => element === randomNumber ? true: false);
    console.log(isExistInArray);
    if (isExistInArray === false){
        uniqueNumbers.push(randomNumber);
    } else if (isExistInArray === undefined){
        uniqueNumbers.push(randomNumber);
    }   
}
console.log(uniqueNumbers.sort());


//15
let randomID = [];
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for (let i = 0; i < 1; i++){
    let idCharacter = '';
for (let b = 0; b < 6; b++){
    idCharacter += character.charAt(Math.floor(Math.random() * character.length));
} randomID.push(idCharacter);
}
console.log(randomID);

//Exercises: Level 2

//1
let anyNumber = Math.floor(Math.random() * 100);
function randomIdGenerator(length){
    let randomId = [];
    const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 1; i++){
        let id = "";
    for (let a = 0; a < length; a++){
        id += character.charAt(Math.floor(Math.random() * character.length));
    }
    randomId.push(id);
    }
    return randomId;
}
console.log(randomIdGenerator(anyNumber));

//2
const hexadecimalNum = '123456789abcdef';
let randomHexadecimal = [];

for (let i = 0; i < 1; i++){
    let hexCharacter = '';
for(let h = 0; h < 6; h++){
    hexCharacter += hexadecimalNum.charAt(Math.floor(Math.random()* hexadecimalNum.length));
} randomHexadecimal.push(hexCharacter);
}
console.log('#' + randomHexadecimal);

//3
let rgbNumber = [];
let red = Math.floor(Math.random()* 256);
let green = Math.floor(Math.random()* 256);
let blue = Math.floor(Math.random()* 256);

rgbNumber.push(red,green,blue);

//4
const UppercaseCountries = [];
for (const country of countries){
    UppercaseCountries.push(country.toUpperCase());
}
console.log(UppercaseCountries);

//5
const countryLenght = [];

for (const country of countries){
    countryLenght.push(country.length);
}
console.log(countryLenght);

//6
let CountryArray = [];
for (const country of countries){
    let threeLetters = country.slice(0,3).toUpperCase();
    let countryLetterLength = [country, threeLetters, country.length];
    CountryArray.push(countryLetterLength);
    console.log(countryLetterLength);
}

//7
let includesLand = [];
let includes = true;
for (const i of countries){
    if (i.includes('land'.toLowerCase())){
  includes === true;      
 includesLand.push(i);
} else if(includes === false){
    console.log('All these countries are without land');
}
}
console.log(includesLand);

//8
let includesIa = [];
let isIncludes = true;

for (const i of countries){
    if (i.includes('ia'.toLowerCase())){
        includesIa.push(i);
    } else if (isIncludes === false){
        console.log('These are countries ends without ia');
    }
}
console.log(includesIa);

//9
let bigNumberCountry = "";
for (let i = 0; i < countries.length; i++){
    if (countries[i].length > bigNumberCountry.length){
        bigNumberCountry = countries[i];
    }
}
console.log(bigNumberCountry);

//10
let fiveCharacterCountry = [];
for (let i = 0; i < countries.length; i++){
    if (countries[i].length === 5){
fiveCharacterCountry.push(countries[i]);
    }
}
console.log(fiveCharacterCountry);

//11
let longestWord = "";
for (let i = 0; i < webTechs.length; i++){
    if (webTechs[i].length > longestWord.length){
        longestWord = webTechs[i];
    }
}
console.log(longestWord);

//12
let techsAndLenghts = [];
for (const tech of webTechs){
let techLenght = [tech, tech.length];
techsAndLenghts.push(techLenght);
console.log(techsAndLenghts);
console.log(techLenght); 
}

//13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const acronym = [];

for (const i of mernStack){
    acronym.push(i[0]);
} console.log(acronym.join(''));

//14
for (const i of webTechs){
    console.log(i);
}

//14
for (let i = 0; i < webTechs.length; i++){
    console.log(webTechs[i]);
}

//15
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const newFruitsArray = [];
for (let i = fruits.length -1; i >= 0; i--){
    newFruitsArray.push(fruits[i]);
}
console.log(newFruitsArray);

//16
let fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
let flatFullStack = fullStack.flat();


  for (let i = 0; i < flatFullStack.length; i++){
console.log(flatFullStack[i].toUpperCase());
  }

//Exercises: Level 3

//1
let countriesCopy = [];
 for (const country of countries){
    countriesCopy.push(country);
 }

 //2
 const sortedCountries = countriesCopy.sort();
 console.log(sortedCountries);

 //3
 let sortedWebTechs = webTechs.sort();
 console.log(sortedWebTechs);

 let sortedMernStack = mernStack.sort();
 console.log(sortedMernStack);

 //4
 const containLand = [];
  for(const country of countriesCopy){
    if (country.includes('land')){
        countriesCopy.shift(country);
        containLand.push(country);
    }
  }
console.log(containLand);
console.log(countriesCopy);

//5
let highestCharacter = "";
for (let i = 0; i < countriesCopy.length; i++){
    if (countriesCopy[i].length > highestCharacter.length){
        highestCharacter = countriesCopy[i];
    }
}
console.log(highestCharacter);

//7
let fourCharacterCountry = [];

for (let i = 0; i < countriesCopy.length; i++){
    if (countriesCopy[i].length === 4){
        fourCharacterCountry.push(countriesCopy[i]);
    }
}
console.log(fourCharacterCountry);

//8
let twoOrMoreCountries = [];
for(const country of countriesCopy){
    if(country.split(' ').length > 1){
        twoOrMoreCountries.push(country);
    }
} console.log(twoOrMoreCountries);

//9
let reversedCountry = [];
for (let i = countriesCopy.length -1; i >= 0; i--){
    reversedCountry.push(countriesCopy[i].toUpperCase());
}
console.log(reversedCountry);







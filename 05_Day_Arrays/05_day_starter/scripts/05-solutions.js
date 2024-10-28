//Exercise: Level 1

//1
const array1 = [];

//2
const array2 = ['Facebook', 'Twitter', 'Instagram', 'Discord', 'Pinterest', 'Linkedin'];

//3
console.log(array2.length);

//4
console.log(array2[0]); //first item 
const middleIndex = Math.floor(array2.length / 2); //middle item
console.log(array2[middleIndex - 1]); //middle item
console.log(array2[array2.length -1]); //last item

//5
const mixedDataTypes = ['hello', 4, true, {color: 'blue', shape: 'circle'} , {skills: ['html', 'css', 'js']}, undefined ];
console.log(mixedDataTypes.length);

//6
const itCompaines = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7
console.log(itCompaines);

//8
console.log(itCompaines.length -1);

//9
console.log(itCompaines[0]); //first company
const middleCompany = Math.floor(itCompaines.length / 2);
console.log(itCompaines[middleCompany - 1]); //middle company
console.log(itCompaines[itCompaines.length -1]); //last company

//10
for (let i = 0; i < itCompaines.length; i++){
   console.log(itCompaines[i]); 
}

//11
for (let i = 0; i < itCompaines.length; i++){
    console.log(itCompaines[i].toUpperCase()); 
 }

//12
console.log(`${itCompaines.toString()} are big IT companies`);

//13
console.log(itCompaines.includes('Facebook') ?  'Facebook' : 'company is not found');

//14
let result = [];
for (let i = 0; i < itCompaines.length; i++) {
    let count = 0; // Variable to count occurrences of 'o'
    const company = itCompaines[i];
  
    // Iterate over each character in the company name
    for (let j = 0; j < company.length; j++) {
      if (company[j].toLowerCase() === 'o') {
        count++;
      }
    }
    // Only add companies with one or zero 'o's to the result array
    if (count >= 1) {
      result.push(company);
    }
  }
  console.log(result);

//15
console.log(itCompaines.sort());

//16
//console.log(itCompaines.reverse());

//17
console.log(itCompaines.slice(0, 3));

//18
console.log(itCompaines.slice(-3));

//19
console.log(itCompaines.slice(parseInt(itCompaines.length/2)));

//20
console.log(itCompaines.shift());
console.log(itCompaines);

//21
console.log(itCompaines.splice(parseInt(itCompaines.length/2)-1, 2));

//22
console.log(itCompaines.pop());

//23
console.log(itCompaines.splice(0, itCompaines.length));
console.log(itCompaines);

//Exercise: Level 2

//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(/[,\s]+|[\s]/));
console.log(text.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart.unshift('Meat'));
console.log(shoppingCart);
console.log(shoppingCart.push('Sugar'));
console.log(shoppingCart);
console.log(shoppingCart.splice(shoppingCart.lastIndexOf('Honey'),1)),
console.log(shoppingCart);
console.log(shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea");
console.log(shoppingCart);

//4
console.log(countries);

countries ==='Ethiopia' ? console.log('ETHIOPIA') : countries.push('Ethiopia');
console.log(countries);

//5
webTechs === 'Sass' ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass');
console.log(webTechs);

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//Exercise: Level 3

//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
const minAge = ages[0]; //min age
const maxAge = ages[ages.length -1]; //max age
console.log(minAge);
console.log(maxAge);
const sum = ages.reduce((accumulator, current) => accumulator + current ); //average age
const averageAge = sum / ages.length;
console.log(averageAge);
console.log(maxAge - minAge); //range of ages

console.log(minAge - averageAge);
console.log(maxAge - averageAge);

console.log(Math.abs(minAge - averageAge) < Math.abs(maxAge - averageAge) ? 'a' : 'b');

//1

//console.log(countries.slice(0, 10));

//2
const middleCountry = Math.floor(countries.length / 2);
console.log(countries[middleCountry - 1]);

//3

if (countries.length % 2 === 0){
  const first = countries.slice(0, middleCountry);
  const second = countries.slice(middleCountry);
  console.log([first, second]);
} ;








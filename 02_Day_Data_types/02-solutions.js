//Exercise: Level 1

//1
const challenge = "30 Days Of JavaScript";

//2
console.log(challenge);

//3
console.log(challenge.length);

//4
console.log(challenge.toUpperCase());

//5
console.log(challenge.toLowerCase());

//6
console.log(challenge.substr(1));

//7
console.log(challenge.slice(0, 3));

//8
console.log(challenge.includes("Script"));

//9
console.log(challenge.split());

//10
console.log(challenge.split(" "));

//11
let social = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(social.split(" "));

//12
console.log(challenge.replace("JavaScript", "Phyton"));

//13
console.log(challenge.charAt(15));

//14
console.log(challenge.charCodeAt());

//15
console.log(challenge.indexOf("a"));

//16
console.log(challenge.lastIndexOf("a"));

//17
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

//18
console.log(sentence.lastIndexOf("because"));

//19
console.log(sentence.search("because"));

//20
console.log(challenge.trim());

//21
console.log(challenge.startsWith("30"));

//22
console.log(challenge.endsWith("JavaScript"));

//23
console.log(challenge.match("a"));

//24
let days = "30";
console.log(days.concat(" ", "Days", " ", "Of", " ", "Javascript"));

//25
console.log(challenge.repeat(2));

//Exercide: Level 2

//1
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

//2
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

//3
console.log(typeof "10" === typeof 10); //false
console.log(typeof Number("10") === typeof 10);

//4
console.log(parseFloat("9.8") === 10); //false
console.log(Math.round(parseFloat("9.8")) === 10); //true

//5
const python = "python";
const jargon = "jargon";
console.log(python.includes("on") && jargon.includes("on"));

//6
const sent = "I hope this course is not full of jargon. ";
console.log(sent.includes("jargon"));

//7
const num = Math.floor(Math.random() * 101);
console.log(num);

//8
const numTwo = Math.floor(Math.random() * 51) + 50;
console.log(numTwo);

//9
const numThree = Math.floor(Math.random() * 256);
console.log(numThree);

//10
const access = "JavaScript";
console.log(access[Math.floor(Math.random() * access.length)]);

//11
console.log(
  "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"
);

//12
let sliceSentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sliceSentence.substr(31, 23));

//Exercide: Level 3

//1
const loveSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(loveSentence.match(/love /gi));
console.log(loveSentence.match(/love/gi).length);

//2
const becauseSentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(becauseSentence.match(/because/gi));
console.log(becauseSentence.match(/because/gi).length);

//3
const cleanSentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const clean = cleanSentence.replace(/[^a-zA-Z0-9.,?!'\s]/g, "");

let words = clean.split(" ");
let wordCounts = {};
for (let i = 0; i < words.length; i++) {
  if (words[i] !== "") {
    wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
  }
}

let maxWord = "";
let maxCount = 0;
for (let word in wordCounts) {
  if (wordCounts[word] > maxCount) {
    maxCount = wordCounts[word];
    maxWord = word;
  }
}
console.log(`Most frequent word is ${maxWord} with count ${maxCount}`);

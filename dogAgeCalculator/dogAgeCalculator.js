/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/

let dogName = process.argv[2];
let humanYear = Number(process.argv[3]);

if (humanYear === 1) {
  console.log(
    `Your dog, ${dogName}, is 1 years old, but that's 15 years old in dog years!`,
  );
} else if (humanYear === 2) {
  console.log(
    `Your dog, ${dogName}, is 2 years old, but that's 24 years old in dog years!`,
  );
} else {
  let dogCalculation = 24 + 5 * (humanYear - 2);
  console.log(
    `Your dog, ${dogName}, is ${humanYear} years old, but that's ${dogCalculation} years old in dog years!`,
  );
}

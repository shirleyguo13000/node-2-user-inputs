/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/

// declaring dynamic input so user can enter their dog's name and human year
let dogName = process.argv[2];
// Number is added to ensure that the data type remains a number as opposed to a string
let humanYear = Number(process.argv[3]);

// conditional for if their dog is 1 years old, 2 years old or anything above 2.
if (humanYear === 1) {
  console.log(
    `Your dog, ${dogName}, is 1 years old, but that's 15 years old in dog years!`,
  );
} else if (humanYear === 2) {
  console.log(
    `Your dog, ${dogName}, is 2 years old, but that's 24 years old in dog years!`,
  );
} else {
  // declaring new variable to store the calculated dog year from users' input
  // calculations are based on how many human years the dog has been alive
  let dogCalculation = 24 + 5 * (humanYear - 2);
  console.log(
    `Your dog, ${dogName}, is ${humanYear} years old, but that's ${dogCalculation} years old in dog years!`,
  );
}

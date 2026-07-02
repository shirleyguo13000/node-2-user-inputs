

// Your task: Make a dog age calculator with Node.js!

// Follow the instructions in the README.md file in this repo.

// Run this file with the node command:
// node dogAgeCalculator.js

// process.argv lets us get information the user types in the terminal
// process.argv[0] is Node
// process.argv[1] is the file name
// process.argv[2] is the dog's name
// process.argv[3] is the dog's age in human years

let dogName = process.argv[2];

// The terminal saves input as a string by default
// Number() changes the age from a string into a number
// so we can do math with it
let humanYear = Number(process.argv[3]);

// This checks if the dog is exactly 1 human year old
// According to the dog age rule, the first human year equals 15 dog years
if (humanYear === 1) {
  console.log(
    `Your dog, ${dogName}, is 1 years old, but that's 15 years old in dog years!`
  );

// This checks if the dog is exactly 2 human years old
// The second human year adds 9 more dog years
// 15 + 9 = 24 dog years
} else if (humanYear === 2) {
  console.log(
    `Your dog, ${dogName}, is 2 years old, but that's 24 years old in dog years!`
  );

// If the dog is older than 2, this block runs
// The first 2 human years equal 24 dog years
// Every year after 2 adds 5 dog years
} else {
  // humanYear - 2 finds how many years are left after the first 2 years
  // Then we multiply that number by 5
  // Then we add 24 because the first 2 years already equal 24 dog years
  let dogCalculation = 24 + 5 * (humanYear - 2);

  console.log(
    `Your dog, ${dogName}, is ${humanYear} years old, but that's ${dogCalculation} years old in dog years!`
  );
}

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
const markHeight = 1.69
const markWeight = 78
const johnHeight = 1.95
const johnWeight = 92
const markBMI = markWeight / (markHeight ** 2 ) 
const JohnBMI = johnWeight / (johnHeight ** 2 )
console.log(markBMI, JohnBMI)
const markHeighterBMI = markBMI > JohnBMI
console.log(markHeighterBMI)

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
if (markBMI > JohnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${JohnBMI})!`)
} else {
    console.log(`John's (${JohnBMI}) is higher than Mark's BMI (${markBMI})!`)
}

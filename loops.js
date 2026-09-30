//Array Traversal: Write a for loop that iterates through an array of numbers but skips every even number and stops entirely if it encounters a negative number.


const numbers = [1, 4, 7, 8, -3, 10, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        break;
    }

    if (numbers[i] % 2 === 0) {
        continue;
    }

    console.log(numbers[i]);
}

//Code Tracing (Nested Loops):
//Calculate the final value of count. Show the state of i and j for each increment.Count ends at 6.


let count = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 3; j > i; j--) {
        count++;
    }
}
console.log(count); 

//While vs. Do-While: Provide a code example where a do...while loop would behave differently than a standard while loop with the same condition.
//The main difference is: while checks the condition before running the code.
//do...while runs the code at least once, then checks the condition.

let number = 10;

// while loop
while (number < 5) {
    console.log("While loop ran");
}

// do...while loop
do {
    console.log("Do-while loop ran");
} while (number < 5);
//the condition is number < 5, since number is 10 false.
//The while loop checks the condition first, sees that it is false, and doesn't run at all.
//The do...while loop runs the code first, then checks the condition. Therefore, it runs once, even though the condition is false.
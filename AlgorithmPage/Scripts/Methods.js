﻿function GCDMethod() {
    let answer27A = document.getElementById("gcd-number-one").value;
    let answer27B = document.getElementById("gcd-number-two").value;
    var intList27A = [];
    var intList27B = [];
    var finalResult27 = [];

    for (let i = 0; i < answer27A + 1; i++) {

        if (answer27A % i == 0) {
            var greatestComDivA = i;
            intList27A.push(greatestComDivA);
        }
    }
    for (let j = 0; j < answer27B + 1; j++) {

        if (answer27B % j == 0) {
            var greatestComDivB = j;
            intList27B.push(greatestComDivB);
        }
    }

    for (let k = 0; k < intList27B.length; k++) {

        if (intList27A.includes(intList27B[k])) {
            finalResult27.push(intList27B[k]);
        }
    }

    var result = finalResult27[finalResult27.length - 1];
    alert(result);  
}

function MaskifyMethod() {
    let answer25 = document.getElementById("maskify-input").value;
    var resultString25 = [];

    //placing an alert message in each if statement specifies them so we don't get a second alert if final if statement is triggered.

    if (answer25.length > 4) {

        for (let h = 0; h < answer25.length; h++) {
            resultString25.push(answer25[h]);
        }
            for (let i = 0; i < resultString25.length - 4; i++) {
                resultString25[i] = "#";
        }

        result = resultString25.join(""); // .join("") removes the commas from array for visual aesthetics
        alert(result); 

    } else if (answer25.length > 0 && answer25.length <= 4) {
        resultString25.push(answer25);
        alert(resultString25);
    } else if (answer25.length == 0) {
        alert("Please enter a valid input.");
    }
}

function PalindromeMethod() {
    let answer24 = document.getElementById("palindrome-input").value;
    var tempArrayA = [];
    var tempArrayB = [];

    for (let i = 0; i < answer24.length; i++) {
        tempArrayA.push(answer24[i]);
    }

    for (let j = tempArrayA.length - 1; j > 0; j--) {
        tempArrayB.push(tempArrayA[j]);
    }
    tempArrayB.push(tempArrayA[0]); //loop doesn't include tempArray[0] so add manually after it's run

    
    for (let h = 0; h < tempArrayA.length; h++) {
        var ifPalindrome = false;
        if (tempArrayA[h] == tempArrayB[h]) {
            ifPalindrome = true;
        } else if (tempArrayA[h] !== tempArrayB[h]) {
            ifPalindrome = false;
            break; //without a break statement the final value of ifPalindrome could still = true and throw off result
            //since any false value causes it to not be a palindrome we can simply break anytime that occurs
        }
    }
    //need a flag (ifPalindrome) to be reset which each iteration of h. .includes() doesn't function the way .contains() does in C#
    //in this logic. Since each index of both arrays must be identical to be palindrome, continuously resetting flag for each element
    //will work since tempArrayB has been reversed. 
    //Tried using "if tempArrayA == tempArrayB" and different equality operators as well as .includes() but doesn't work.

    if (ifPalindrome) { //if flag has left above loop with a true value.
        alert("This is a palindrome");
    } else {
        alert("This is not a palindrome");
    }
}

function CollatzMethod() {
    let answer19 = document.getElementById("collatz-input").value;
    let counter19 = 0;

    while (answer19 > 1) {
        if (answer19 % 2 == 0) {
            answer19 /= 2;
            counter19++;
        } else if (answer19 % 2 != 0) {
            answer19 = answer19 * 3 + 1;
            counter19++;
        } else if (answer19 == 1) {
            break;
        }
    }
    if (answer19 == 1) {
        alert("It takes " + counter19 + " step(s) for N to = 1.");
    }

    if (answer19 == 0) {
        alert("Please enter a number greater than 0.")
    }
}

//Could be further refined by turning our result array into a string to be displayed at end
//https://www.rapidtables.com/convert/number/decimal-to-binary.html for details on how the math works to convert
function BinaryMethod() {
    let temp = document.getElementById("binary-input").value;
    let result = [];

    while (temp > 0) {
        console.log(temp); //can be removed, just to see process of operations during conversion in console
        if (temp % 2 === 1) {
            result.push(1);
            temp = Math.floor(temp / 2);
        } else if (temp % 2 === 0) {
            result.push(0);
            temp = Math.floor(temp / 2);
        }
    }
    result.reverse(); //since we push each step of the process from right to left (1's, 2's, 4's etc) we need to reverse result to 
    //go from left to right for final result

    if (temp < 0) {
        alert("Please enter a whole number.");
    } else {
        alert(result);
    }
}

function TwoDigitMultipleMethod() {
    let temp = document.getElementById("two-digit-multiple-input").value;
    let result = 0;

    //initialize myArray as a num array filled with the contents of user input
    var myArray = String(temp).split("").map((temp) => {
        return Number(temp);
    })

    for (let i = 1; i < myArray[1] + 1; i++) {
        result = myArray[0] * i;
        alert(myArray[0] + " * " + i + " = " + result);
    }
}

function TetrahedralMethod() {
    let input = document.getElementById("tetrahedral-method-input").value;
    let inputNum = parseFloat(input);
    //formula is (n * (n + 1) * (n + 2)) / 6
    //was getting input as a string for some reason hence the parseFloat to ensure its a number

    if (inputNum >= 1 && inputNum % 1 == 0) {
        let firstStep = inputNum + 1;
        let secondStep = inputNum * firstStep;
        let thirdStep = inputNum + 2;
        let fourthStep = secondStep * thirdStep;
        let result = fourthStep / 6;
        alert("The nth tetrahedral number is " + result);
        /*(n * (n + 1) * (n + 2)) / 6*/
    } else if (inputNum - 1 || inputNum % 1 != 0) {
        alert("That is not a tetrahedral number");
    }
}

//CIRCLE CALCULATIONS METHODS
function CircleCalculationsGetArea() {
    let areaInput = document.getElementById("circle-calculations-area-method-input").value;
    let result = areaInput * areaInput * Math.PI;
    alert("The calculated area is: " + result);

}
function CircleCalculationsGetPerimeter() {
    let perimeterInput = document.getElementById("circle-calculations-method-perimeter-input").value;
    let result = 2 * Math.PI * perimeterInput;

    alert("The calculated perimeter is: " + result);
}

function TriangularMethod() {
    let input = document.getElementById("triangular-method-input").value;
    let inputNum = parseFloat(input); //otherwise input gets interpreted as a string incorrectly concatenates.
    let result = inputNum * (inputNum + 1);
    result /= 2;
    alert(result);
}

function ConvenienceStoreMethod() {
    let inputQuarters = document.getElementById("convenience-store-method-input-one").value;
    let inputDimes = document.getElementById("convenience-store-method-input-two").value;
    let inputNickels = document.getElementById("convenience-store-method-input-three").value;
    let inputPennies = document.getElementById("convenience-store-method-input-four").value;
    let inputTotal = document.getElementById("convenience-store-method-input-five").value;

    let convertedQuarters = inputQuarters * .25;
    let convertedDimes = inputDimes * .10;
    let convertedNickels = inputNickels * .05;
    let convertedPennies = inputPennies * .01;

    let totalChange = convertedQuarters + convertedDimes + convertedNickels + convertedPennies;
    let result = true;

    totalChange >= inputTotal ? result = true : result = false;

    if (result) {
        alert("You have enough.");
    } else {
        alert("You don't have enough.");
    }
}

function TwoSumMethod() {
    let inputs = document.getElementById("two-sum-method-input-one").value;
    let targetString = document.getElementById("two-sum-method-input-two").value;
    let target = Number(targetString); //ensure target is a number not a string
    var inputArray = String(inputs).split(",").map((inputs) => { //make number array separated by each , in inputs
        return Number(inputs);
    })
    let mapResult = new Map();

    let result = [];

    for (let i = 0; i < inputArray.length; i++) {
        let difference = target - inputArray[i];

        if (mapResult.has(difference)) {
            /*alert([i, mapResult.get(difference)]);*/
            result.push(mapResult.get(difference));
            result.push(i);
            
        }
        mapResult.set(inputArray[i], i);
               
    }
    alert(result);    
}

function LastWordMethod() {
    let input = document.getElementById("last-word-method-input").value;

    var sentenceArray = String(input).trim().split(" ").map((input) => { //place each word in a string array, also using trim to remove any spaces from end
        return String(input);
    })

    let lastWord = sentenceArray.pop(); //now retrieve final word and store in var
    let result = lastWord.length; //get length of final word
    alert(result);
}

function PlusOneMethod() {
    let input = document.getElementById("plus-one-method-input").value;
    let numInteger = Number(input); //cast input into number
    let resultInteger = numInteger + 1; //add 1 to number input

    var resultArray = String(resultInteger).split("").map((resultInteger) => { //cast number reuslt back into number array
        return Number(resultInteger);
    })

    alert(resultArray);
}

function RomanNumeralsMethod() {
    let input = document.getElementById("roman-numerals-method-input").value;

    var romNum = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;

    for (let i = 0; i < input.length; i++) {
        if (romNum[input[i]] < romNum[input[i + 1]]) {
            result += romNum[input[i + 1]] - romNum[input[i]];
            i++;
        } else {
            result += romNum[input[i]];
        }
    }
    alert("The number equivalent is: " + result);
}
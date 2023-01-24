function GCDMethod() {
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
    alert("It takes " + counter19 + " step(s) for N to = 1.");

    if (answer19 == 0) {
        alert("Please enter a number greater than 0.")
    }
}

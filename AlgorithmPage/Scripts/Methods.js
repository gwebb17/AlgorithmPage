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

function testMethod() {
    var x = 10;
    alert(x);
}
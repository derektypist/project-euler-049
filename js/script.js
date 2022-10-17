// Initialise Prime Number List
const NUMPRIMES = 10000;
const PRIMES = Array(NUMPRIMES).fill(false);
(function initPrimes(num) {
    const upper = Math.floor((num - 1) / 2);
    const isPrime = Array(upper).fill(true);
    const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2);
    for (let i = 0; i <= sqrtUpper; i++) {
        if (isPrime[i]) {
            const prime = 2 * i + 3;
            PRIMES[prime] = true;
            const primeSquaredIndex = 2 * i ** 2 + 6 * i + 3;
            for (let j = primeSquaredIndex; j < upper; j += prime) {
                isPrime[j] = false;
            }
        }
    }

    for (let i = sqrtUpper + 1; i < upper; i++) {
        if (isPrime[i]) PRIMES[2 * i + 3] = true;
    }
})(NUMPRIMES);

// Function to check if number num is a prime
function isPrime(num) {
    return PRIMES[num];
}


// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = `Solution is ${primePermutations()}. <br>`;
    // Display Solution in the Browser
    document.getElementById("solution").innerHTML = txt;
}

// Function to check if a permutation can be formed
function isPermutation(base, test) {
    const baseDigits = base.toString().split("");
    const testDigits = test.toString().split("");
    return baseDigits.length === testDigits.length && testDigits.every(digit => baseDigits.indexOf(digit) !== -1);
}

/*
    Function to Return the Solution to the Problem as described in
    https://projecteuler.net/problem=49

    primePermutations() returns 296962999629
*/
function primePermutations() {
    const STEP = 3330, STEP2 = 6660;
    const upperBound = 9999 - STEP2;
    for (let i = 1235; i < upperBound; i += 2) {
        if (i === 1487) continue;
        if (isPrime(i) && isPrime(i + STEP) && isPrime(i + STEP2) && isPermutation(i, i + STEP) && isPermutation(i, i + STEP2)) {
            return parseInt(i.toString() + (i + STEP).toString() + (i + STEP2).toString());
        }
    }
}

// Function to Hide Solution
function hideSolution() {
    let txt = "";
    document.getElementById("solution").innerHTML = txt;
}
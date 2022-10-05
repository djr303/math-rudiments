"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSinglePrimeOfSubset = exports.isPrime = exports.findPreviousPrimes = exports.getPrimes = exports.MAX_INDEX = exports.MIN_INDEX = exports.PRIMES_1_TO_200 = void 0;
// Primes
// Note: Working off the index values here for sanity
exports.PRIMES_1_TO_200 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
exports.MIN_INDEX = 0;
exports.MAX_INDEX = 8 || exports.PRIMES_1_TO_200.length - 1;
// Note: this function is NOT pure
var getPrimes = function (indexMin, indexMax) {
    if (indexMax === void 0) { indexMax = exports.MAX_INDEX; }
    if (!(indexMin >= 0 && indexMin <= exports.MAX_INDEX && indexMax >= 0 && indexMax <= exports.MAX_INDEX)) {
        throw new Error('Indexes out of range');
    }
    var ret = [];
    for (var i = indexMin; i <= indexMax; i++) {
        ret.push(exports.PRIMES_1_TO_200[i]);
    }
    return ret;
};
exports.getPrimes = getPrimes;
// Note: this function is NOT pure
var findPreviousPrimes = function (index) {
    // console.log('index', index)
    if (!(index >= 0 && index <= exports.MAX_INDEX)) {
        throw new Error('Index out of range');
    }
    var ret = [];
    for (var i = index; i >= 0; i--) {
        ret.push(exports.PRIMES_1_TO_200[i]);
    }
    ret.reverse();
    return ret;
};
exports.findPreviousPrimes = findPreviousPrimes;
var isPrime = function (n) {
    // Corner cases
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;
    // This is checked so that we can skip
    // middle five numbers in below loop
    if (n % 2 == 0 || n % 3 == 0)
        return false;
    for (var i = 5; i * i <= n; i += 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    return true;
};
exports.isPrime = isPrime;
var getSinglePrimeOfSubset = function (index) {
    var subSet = __spreadArray([], exports.PRIMES_1_TO_200, true).slice(0, index + 1);
    var randomSubSetIndex = Math.round(Math.random() * index);
    return [subSet[randomSubSetIndex], randomSubSetIndex];
};
exports.getSinglePrimeOfSubset = getSinglePrimeOfSubset;
/* export const getRandomPrime = (index: number): [number, number] => {
  const prime = Math.round(Math.random() * (index || MAX_INDEX));
  
  return [prime, index || MAX_INDEX];
}; */

"use strict";
// Factorials
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrimeFactors = void 0;
var getPrimeFactors = function (n) {
    var factors = [];
    var divisor = 2;
    while (n >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n /= divisor;
        }
        else {
            divisor++;
        }
    }
    // Note: Right now this algorithm does not handle distinct values
    // so remove them before we return
    return factors.filter(function (item, pos, self) { return self.indexOf(item) == pos; });
};
exports.getPrimeFactors = getPrimeFactors;

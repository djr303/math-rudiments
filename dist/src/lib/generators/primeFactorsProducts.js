"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionAnswerSet = void 0;
// Prime factor products
var factorials_1 = require("../../data/factorials");
var getQuestionAnswerSet = function (x, primeMultiplier) {
    var ret = [];
    var primeFactors = (0, factorials_1.getPrimeFactors)(x);
    for (var i = 0; i < primeFactors.length; i++) {
        var answer = primeFactors[i] * primeMultiplier;
        var qStr = "".concat(primeFactors[i], " * ").concat(primeMultiplier, " = ?");
        ret.push([qStr, answer]);
    }
    return ret;
};
exports.getQuestionAnswerSet = getQuestionAnswerSet;

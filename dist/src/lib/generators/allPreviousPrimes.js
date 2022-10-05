"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionAnswerSet = void 0;
// Note: using max here as max as 0 to 'max' of integer based factors
var getQuestionAnswerSet = function (previousPrimes, multiples) {
    var ret = [];
    for (var i = 0; i < previousPrimes.length; i++) {
        for (var x = 0; x < multiples.length; x++) {
            var answer = previousPrimes[i] * multiples[x];
            var qStr = "".concat(previousPrimes[i], " * ").concat(multiples[x], " = ?");
            ret.push([qStr, answer]);
        }
    }
    return ret;
};
exports.getQuestionAnswerSet = getQuestionAnswerSet;

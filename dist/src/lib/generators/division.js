"use strict";
// Division
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionAnswer = void 0;
var getQuestionAnswer = function (prime, y) {
    var x = prime * y;
    var qStr = "".concat(x, " / ").concat(y, " = ?");
    return [qStr, prime, x];
};
exports.getQuestionAnswer = getQuestionAnswer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionAnswer = void 0;
var getQuestionAnswer = function (x, y) {
    var answer = x + y;
    var qStr = "".concat(x, " + ").concat(y, " = ?");
    return [qStr, answer];
};
exports.getQuestionAnswer = getQuestionAnswer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrimeFactorSet = exports.getPreviousPrimesSet = exports.getDivisionPair = exports.getMultiplicationPair = exports.getSubtractionPair = exports.getAdditionPair = void 0;
var addition_1 = require("./addition");
Object.defineProperty(exports, "getAdditionPair", { enumerable: true, get: function () { return addition_1.getQuestionAnswer; } });
var subtraction_1 = require("./subtraction");
Object.defineProperty(exports, "getSubtractionPair", { enumerable: true, get: function () { return subtraction_1.getQuestionAnswer; } });
var multiplication_1 = require("./multiplication");
Object.defineProperty(exports, "getMultiplicationPair", { enumerable: true, get: function () { return multiplication_1.getQuestionAnswer; } });
var division_1 = require("./division");
Object.defineProperty(exports, "getDivisionPair", { enumerable: true, get: function () { return division_1.getQuestionAnswer; } });
var allPreviousPrimes_1 = require("./allPreviousPrimes");
Object.defineProperty(exports, "getPreviousPrimesSet", { enumerable: true, get: function () { return allPreviousPrimes_1.getQuestionAnswerSet; } });
var primeFactorsProducts_1 = require("./primeFactorsProducts");
Object.defineProperty(exports, "getPrimeFactorSet", { enumerable: true, get: function () { return primeFactorsProducts_1.getQuestionAnswerSet; } });

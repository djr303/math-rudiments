"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Index (Main)
// Note: Having to use 'require' here as TS complication does handle this library very well
var prompts = require('prompts');
var program = require('commander').program;
var index_1 = require("./lib/generators/index");
var primes_1 = require("./data/primes");
var helpers_1 = require("./lib/helpers");
var getValidationFunction = function (answer) { return function (value) { return value === answer ? true : 'That answer is incorrect.'; }; };
var getQuestions = function (questionType, numberOfQuestions, primeSet) {
    var questions = [];
    switch (questionType) {
        case 'addition':
            for (var i = 1; i <= numberOfQuestions; i++) {
                var _a = (0, primes_1.getSinglePrimeOfSubset)(primeSet), prime01 = _a[0], index01 = _a[1];
                var _b = (0, primes_1.getSinglePrimeOfSubset)(primeSet), prime02 = _b[0], index02 = _b[1];
                var additionQuestion = (0, index_1.getAdditionPair)(prime01, prime02);
                var allPreviousPrimes01 = (0, index_1.getPreviousPrimesSet)((0, primes_1.findPreviousPrimes)(index01), [(0, helpers_1.generateRandomInteger)(100)]);
                var allPreviousPrimes02 = (0, index_1.getPreviousPrimesSet)((0, primes_1.findPreviousPrimes)(index02), [(0, helpers_1.generateRandomInteger)(100)]);
                questions.push({
                    type: 'number',
                    name: "Addition question ".concat(i),
                    message: additionQuestion[0],
                    validate: getValidationFunction(additionQuestion[1])
                });
                for (var x = 0; x < allPreviousPrimes01.length; x++) {
                    questions.push({
                        type: 'number',
                        name: "Multiplication question ".concat(i, ".").concat(x),
                        message: allPreviousPrimes01[x][0],
                        validate: getValidationFunction(allPreviousPrimes01[x][1])
                    });
                }
                for (var x = 0; x < allPreviousPrimes02.length; x++) {
                    questions.push({
                        type: 'number',
                        name: "Multiplication question ".concat(i, ".").concat(x),
                        message: allPreviousPrimes02[x][0],
                        validate: getValidationFunction(allPreviousPrimes02[x][1])
                    });
                }
            }
            break;
        case 'subtraction':
            for (var i = 1; i <= numberOfQuestions; i++) {
                var _c = (0, primes_1.getSinglePrimeOfSubset)(primeSet), prime01 = _c[0], index01 = _c[1];
                var _d = (0, primes_1.getSinglePrimeOfSubset)(primeSet), prime02 = _d[0], index02 = _d[1];
                var subtractionQuestion = (0, index_1.getSubtractionPair)(prime01, prime02);
                var allPreviousPrimes01 = (0, index_1.getPreviousPrimesSet)((0, primes_1.findPreviousPrimes)(index01), [(0, helpers_1.generateRandomInteger)(100)]);
                var allPreviousPrimes02 = (0, index_1.getPreviousPrimesSet)((0, primes_1.findPreviousPrimes)(index02), [(0, helpers_1.generateRandomInteger)(100)]);
                questions.push({
                    type: 'number',
                    name: "Subtraction question ".concat(i),
                    message: subtractionQuestion[0],
                    validate: getValidationFunction(subtractionQuestion[1])
                });
                for (var x = 0; x < allPreviousPrimes01.length; x++) {
                    questions.push({
                        type: 'number',
                        name: "Multiplication question ".concat(i, ".").concat(x),
                        message: allPreviousPrimes01[x][0],
                        validate: getValidationFunction(allPreviousPrimes01[x][1])
                    });
                }
                for (var x = 0; x < allPreviousPrimes02.length; x++) {
                    questions.push({
                        type: 'number',
                        name: "Multiplication question ".concat(i, ".").concat(x),
                        message: allPreviousPrimes02[x][0],
                        validate: getValidationFunction(allPreviousPrimes02[x][1])
                    });
                }
            }
            break;
        case 'multiplication':
            for (var i = 1; i <= numberOfQuestions; i++) {
                var _e = (0, primes_1.getSinglePrimeOfSubset)(primeSet), prime01 = _e[0], index01 = _e[1];
                var _f = (0, primes_1.getSinglePrimeOfSubset)(primeSet), prime02 = _f[0], index02 = _f[1];
                var multiplicationQuestion = (0, index_1.getMultiplicationPair)(prime01, prime02);
                var allPreviousPrimes01 = (0, index_1.getPreviousPrimesSet)((0, primes_1.findPreviousPrimes)(index01), [(0, helpers_1.generateRandomInteger)(100)]);
                var allPreviousPrimes02 = (0, index_1.getPreviousPrimesSet)((0, primes_1.findPreviousPrimes)(index02), [(0, helpers_1.generateRandomInteger)(100)]);
                questions.push({
                    type: 'number',
                    name: "Multiplication question ".concat(i),
                    message: multiplicationQuestion[0],
                    validate: getValidationFunction(multiplicationQuestion[1])
                });
                for (var x = 0; x < allPreviousPrimes01.length; x++) {
                    questions.push({
                        type: 'number',
                        name: "Multiplication question ".concat(i, ".").concat(x),
                        message: allPreviousPrimes01[x][0],
                        validate: getValidationFunction(allPreviousPrimes01[x][1])
                    });
                }
                for (var x = 0; x < allPreviousPrimes02.length; x++) {
                    questions.push({
                        type: 'number',
                        name: "Multiplication question ".concat(i, ".").concat(x),
                        message: allPreviousPrimes02[x][0],
                        validate: getValidationFunction(allPreviousPrimes02[x][1])
                    });
                }
            }
            break;
        case 'division':
            for (var i = 1; i <= numberOfQuestions; i++) {
                var _g = (0, primes_1.getSinglePrimeOfSubset)(primeSet), prime01 = _g[0], index01 = _g[1];
                var _h = (0, primes_1.getSinglePrimeOfSubset)(primeSet), prime02 = _h[0], index02 = _h[1];
                var divisionQuestion = (0, index_1.getDivisionPair)(prime01, prime02);
                var allPreviousPrimes01 = (0, index_1.getPreviousPrimesSet)((0, primes_1.findPreviousPrimes)(index01), [(0, helpers_1.generateRandomInteger)(100)]);
                var allPreviousPrimes02 = (0, index_1.getPreviousPrimesSet)((0, primes_1.findPreviousPrimes)(index02), [(0, helpers_1.generateRandomInteger)(100)]);
                questions.push({
                    type: 'number',
                    name: "Division question ".concat(i),
                    message: divisionQuestion[0],
                    validate: getValidationFunction(divisionQuestion[1])
                });
                for (var x = 0; x < allPreviousPrimes01.length; x++) {
                    questions.push({
                        type: 'number',
                        name: "Multiplication question ".concat(i, ".").concat(x),
                        message: allPreviousPrimes01[x][0],
                        validate: getValidationFunction(allPreviousPrimes01[x][1])
                    });
                }
                for (var x = 0; x < allPreviousPrimes02.length; x++) {
                    questions.push({
                        type: 'number',
                        name: "Multiplication question ".concat(i, ".").concat(x),
                        message: allPreviousPrimes02[x][0],
                        validate: getValidationFunction(allPreviousPrimes02[x][1])
                    });
                }
            }
            break;
    }
    return questions;
};
var main = function (questionType, numberOfQuestions, primeSet) { return __awaiter(void 0, void 0, void 0, function () {
    var questions, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                questions = getQuestions(questionType, numberOfQuestions, primeSet);
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < questions.length)) return [3 /*break*/, 4];
                return [4 /*yield*/, prompts(questions[i])];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
program.arguments('<questionType>', 'Question type to produce (One of). Options are: addition | subtraction | multiplication | division');
program.arguments('<numberOfQuestions>', 'Number of questions', function (v) { return parseInt(v); });
program.arguments('<primes>', 'Number of primes in the question set', function (v) { return parseInt(v); });
var raw = program.parse();
main(raw.args[0], raw.args[1], raw.args[2]);

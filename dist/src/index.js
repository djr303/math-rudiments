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
var _this = this;
var colors = require("colors");
var ADDITION = "ADDITION";
var SUBTRACTION = "SUBTRACTION";
var MULTIPLICATION = "MULTIPLICATION";
var DIVISION = "DIVISION";
var settings = [
    [ADDITION, 25, 100, 0],
    [SUBTRACTION, 25, 100, 0],
    [MULTIPLICATION, 25, 10, 0],
    [DIVISION, 25, [100, 10], 0],
];
var generateFixed = function (factor, toFixed) { return parseInt(Math.round(Math.random() * factor).toFixed(toFixed)); };
var generateAdditionProblem = function (factor, toFixed) {
    var x = generateFixed(factor, toFixed);
    var y = generateFixed(factor, toFixed);
    var answer = x + y;
    return [x + " + " + y, "" + answer];
};
var generateSubtractionProblem = function (factor, toFixed) {
    var x = generateFixed(factor, toFixed);
    var y = generateFixed(factor, toFixed);
    var answer = x - y;
    return [x + " - " + y, "" + answer];
};
var generateMultiplicationProblem = function (factor, toFixed) {
    var x = generateFixed(factor, toFixed);
    var y = generateFixed(factor, toFixed);
    var answer = x * y;
    return [x + " * " + y, "" + answer];
};
var generateDivisionProblem = function (factor, toFixed) {
    var x = generateFixed(factor[0], toFixed);
    var y = generateFixed(factor[1], toFixed);
    y = y !== 0 ? y : 1;
    var z = x * y;
    var answer = x;
    return [z + " / " + y, "" + answer];
};
var createQuestions = function (s) {
    var ret = [];
    for (var i = 0; i < s.length; i++) {
        for (var x = 1; x <= s[i][1]; x++) {
            switch (s[i][0]) {
                case ADDITION:
                    ret.push(generateAdditionProblem(s[i][2], s[i][3]));
                    break;
                case SUBTRACTION:
                    ret.push(generateSubtractionProblem(s[i][2], s[i][3]));
                    break;
                case MULTIPLICATION:
                    ret.push(generateMultiplicationProblem(s[i][2], s[i][3]));
                    break;
                case DIVISION:
                    ret.push(generateDivisionProblem(s[i][2], s[i][3]));
                    break;
                default:
                    continue;
            }
        }
    }
    return ret;
};
var keyPressContinue = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        process.stdin.setRawMode(true);
        return [2 /*return*/, new Promise(function (resolve) {
                return process.stdin.once("data", function () {
                    process.stdin.setRawMode(false);
                    resolve();
                });
            })];
    });
}); };
var main = function () { return __awaiter(_this, void 0, void 0, function () {
    var questions, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                questions = createQuestions(settings);
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < questions.length)) return [3 /*break*/, 5];
                console.log((questions[i][0] + " = ?\n").red);
                return [4 /*yield*/, keyPressContinue()];
            case 2:
                _a.sent();
                console.log((questions[i][1] + "\n\n").yellow);
                return [4 /*yield*/, keyPressContinue()];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 1];
            case 5:
                console.log("Finished!".green);
                return [2 /*return*/];
        }
    });
}); };
;
(function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, main()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })().then(process.exit);

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
exports.__esModule = true;
var table_1 = require("table");
var TextAnimation = require("text-animation");
var exec = require("child_process").exec;
var c = require('ansi-colors');
var prompts = require('prompts');
var _a = require('enquirer'), Input = _a.Input, AutoComplete = _a.AutoComplete;
var numberRegex = /\d+/g;
var letterRegex = /[a-zA-Z]+/g;
var removeDuplicates = function (str) {
    var lhs = new Set();
    for (var i = 0; i < str.length; i++)
        lhs.add(str[i]);
    for (var _i = 0, lhs_1 = lhs; _i < lhs_1.length; _i++) {
        var ch = lhs_1[_i];
        return ch;
    }
};
var directions = {
    N: "North",
    NE: "North East",
    NW: "North West",
    E: "East",
    W: "West",
    S: "South",
    SE: "South East",
    SW: "South West"
};
TextAnimation("Physics Vector", function (err) {
    if (err)
        throw err;
    TextAnimation({
        text: "Solver",
        animation: "top-bottom",
        end: function () {
            console.clear();
            var vectorAddition = function () {
                var askVector1 = new Input({
                    name: 'name',
                    message: "Vector 1: "
                });
                var askVector2 = new Input({
                    name: 'name',
                    message: "Vector 2: "
                });
                var run = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var v1, v2, v1Int, v2Int, matchLetter;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, askVector1.run()];
                            case 1:
                                v1 = _a.sent();
                                return [4 /*yield*/, askVector2.run()];
                            case 2:
                                v2 = _a.sent();
                                v1Int = v1.match(numberRegex);
                                v2Int = v2.match(numberRegex);
                                matchLetter = v1.match(letterRegex);
                                console.log("The resultant vector is: ".concat(c.green(Number(v1Int === null || v1Int === void 0 ? void 0 : v1Int[0]) + Number(v2Int === null || v2Int === void 0 ? void 0 : v2Int[0])), " ").concat(c.red(matchLetter)));
                                return [2 /*return*/];
                        }
                    });
                }); };
                run();
            };
            var addRightAngle = function () {
                var getVector1 = new Input({
                    name: 'name',
                    message: "Opposite Side: "
                });
                var getVector2 = new Input({
                    name: 'name',
                    message: "Adjacent Side: "
                });
                var scalarQuantity = new Input({
                    name: 'name',
                    message: "Scalar Quantity: "
                });
                var run2 = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var vector1, vector2, scalar, v1Int, v2Int, matchLetter1, matchLetter2, concatDirection, magnitude, finalMagnitude, direction, finalDirection, degrees;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getVector1.run()];
                            case 1:
                                vector1 = _a.sent();
                                return [4 /*yield*/, getVector2.run()];
                            case 2:
                                vector2 = _a.sent();
                                return [4 /*yield*/, scalarQuantity.run()];
                            case 3:
                                scalar = _a.sent();
                                v1Int = vector1.match(numberRegex);
                                v2Int = vector2.match(numberRegex);
                                matchLetter1 = vector1.match(letterRegex);
                                matchLetter2 = vector2.match(letterRegex);
                                concatDirection = matchLetter1 === null || matchLetter1 === void 0 ? void 0 : matchLetter1.concat(String(matchLetter2)).join("");
                                magnitude = Math.pow(Number(v1Int === null || v1Int === void 0 ? void 0 : v1Int[0]), 2) + Math.pow(Number(v2Int === null || v2Int === void 0 ? void 0 : v2Int[0]), 2);
                                finalMagnitude = Math.round(Math.sqrt(magnitude) * 100) / 100;
                                console.log("Magnitude: ".concat(c.green(finalMagnitude), " ").concat(c.red(matchLetter1)));
                                direction = Number(v2Int) / Number(v1Int);
                                finalDirection = Math.atan(direction);
                                degrees = Math.round(finalDirection * 180 / Math.PI * 100) / 100;
                                console.log("Direction in Degrees: ".concat(c.green(degrees), " ").concat(c.red(matchLetter1)));
                                switch (concatDirection) {
                                    case "N":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.N));
                                        break;
                                    case "NN":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.N));
                                        break;
                                    case "NE":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.NE));
                                        break;
                                    case "EN":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.NE));
                                        break;
                                    case "NW":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.NW));
                                        break;
                                    case "WN":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.NW));
                                        break;
                                    case "E":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.E));
                                        break;
                                    case "EE":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.E));
                                        break;
                                    case "W":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.NE));
                                        break;
                                    case "WW":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.W));
                                        break;
                                    case "SE":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.SE));
                                        break;
                                    case "ES":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.SE));
                                        break;
                                    case "SW":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.SW));
                                        break;
                                    case "WS":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.SW));
                                        break;
                                    case "S":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.S));
                                        break;
                                    case "SS":
                                        console.log("Final Answer: ".concat(finalMagnitude, " ").concat(scalar, ", ").concat(degrees, "\u00B0 ").concat(directions.S));
                                        break;
                                }
                                return [2 /*return*/];
                        }
                    });
                }); };
                run2();
            };
            var vectorResolution = function () {
                var getMagnitude = new Input({
                    name: 'name',
                    message: "Magnitude: "
                });
                var getDirection = new Input({
                    name: 'name',
                    message: "Degrees: "
                });
                var run3 = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var magnitudeQ, directionQ, magnitudeInt, directionInt, matchLetter1, degreesfy, degreesfx, fy, fx;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getMagnitude.run()];
                            case 1:
                                magnitudeQ = _a.sent();
                                return [4 /*yield*/, getDirection.run()];
                            case 2:
                                directionQ = _a.sent();
                                magnitudeInt = magnitudeQ.match(numberRegex);
                                directionInt = directionQ.match(numberRegex);
                                matchLetter1 = magnitudeQ.match(letterRegex);
                                degreesfy = Math.sin((Math.PI / 180) * Number(directionQ));
                                degreesfx = Math.cos((Math.PI / 180) * Number(directionQ));
                                fy = Math.round(Number(magnitudeInt) * degreesfy);
                                fx = Math.round(Number(magnitudeInt) * degreesfx);
                                console.log("Fx(Horizontal Component): ".concat(c.green(fx), " ").concat(c.red(matchLetter1)));
                                console.log("Fy(Vertical Component): ".concat(c.green(fy), " ").concat(c.red(matchLetter1)));
                                return [2 /*return*/];
                        }
                    });
                }); };
                run3();
            };
            var tableShow = function () {
                var data = [
                    ["".concat(c.bgBlue('1. Addition of Vectors')), 'Addition of two vectors to get the Resultant Vector.'],
                    ["".concat(c.bgRed('2. Adding at RIGHT ANGLE to Each Other')), 'Pythagorean theorem is the useful approach for this one.'],
                    ["".concat(c.bgMagenta('3. Resolution of Vector Quantity')), 'process where one vector is broken into smaller vectors.'],
                ];
                var config = {
                    columnDefault: {
                        width: 60
                    },
                    header: {
                        alignment: 'center',
                        content: c.red('Available Solvers')
                    }
                };
                console.log((0, table_1.table)(data, config));
            };
            tableShow();
            (function () { return __awaiter(void 0, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'text',
                                name: 'meaning',
                                message: 'Which Solver Do you Want?: '
                            })];
                        case 1:
                            response = _a.sent();
                            if (response.meaning === "1") {
                                vectorAddition();
                            }
                            else if (response.meaning === "2") {
                                addRightAngle();
                            }
                            else if (response.meaning === "3") {
                                vectorResolution();
                            }
                            else {
                                console.log(c.red("Error - Invalid Option!"));
                            }
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
    });
});

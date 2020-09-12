"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = exports.info = exports.warn = exports.error = void 0;
var get_caller_file_1 = __importDefault(require("get-caller-file"));
var production = process.env.NODE_ENV == 'production' || false;
/*
Levels:
1. Error
2. Warn
3. Info
4. Debug
*/
function error() {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    console.error.apply(console, __spreadArrays(["[E " + getCaller() + "]"], content));
}
exports.error = error;
function warn() {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    console.warn.apply(console, __spreadArrays(["[W " + getCaller() + "]"], content));
}
exports.warn = warn;
function info() {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArrays(["[I " + getCaller() + "]"], content));
}
exports.info = info;
function debug() {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    if (production)
        return;
    console.log.apply(console, __spreadArrays(["[D " + getCaller() + "]"], content));
}
exports.debug = debug;
// getCallerFile() but only the last part after the last \.
function getCaller() {
    var caller = get_caller_file_1.default(3);
    return caller.substr(caller.lastIndexOf('\\') + 1);
}

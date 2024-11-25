"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var navigation_1 = __importDefault(require("../navigation"));
// import Outlet
var react_router_dom_1 = require("react-router-dom");
var Root = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(navigation_1.default, null),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
};
exports.default = Root;

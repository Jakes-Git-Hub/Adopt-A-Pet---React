"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Search = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var searchInputRef = (0, react_1.useRef)(null);
    var onSearchHandler = function (e) {
        var _a;
        e.preventDefault();
        var searchQuery = {
            name: ((_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.value) || ''
        };
        var query = (0, react_router_dom_1.createSearchParams)(searchQuery);
        navigate({
            pathname: '/search',
            search: "?".concat(query)
        });
    };
    return (react_1.default.createElement("form", { onSubmit: onSearchHandler, className: "search-form" },
        react_1.default.createElement("input", { type: "text", className: "search", ref: searchInputRef }),
        react_1.default.createElement("button", { type: "submit", className: "search-button" }, "\uD83D\uDD0E")));
};
exports.default = Search;

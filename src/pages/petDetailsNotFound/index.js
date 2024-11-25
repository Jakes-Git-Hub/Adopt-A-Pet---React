"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var PetDetailsNotFound = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var goHome = function () {
        navigate('/');
    };
    return (react_1.default.createElement("main", { className: "page" },
        react_1.default.createElement("h3", null, "404: Who let the dogs out?"),
        react_1.default.createElement("p", null, "Sorry, but the details for this pet have not been uploaded by the shelter yet. Check back later!"),
        react_1.default.createElement("img", { src: "https://i.chzbgr.com/full/8362031616/h9EB970C5/weve-lost-our-corgination", alt: "" }),
        react_1.default.createElement("div", { className: "actions-container" },
            react_1.default.createElement("button", { className: "button", onClick: goHome }, "Go Home"))));
};
exports.default = PetDetailsNotFound;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Pet = function (_a) {
    var _b, _c, _d;
    var animal = _a.animal;
    return (react_1.default.createElement("a", { key: animal.id, href: "/".concat(((_b = animal.type) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || 'unknown', "/").concat(animal.id), className: "pet" },
        react_1.default.createElement("article", null,
            react_1.default.createElement("div", { className: "pet-image-container" }, react_1.default.createElement("img", { className: "pet-image", src: ((_d = (_c = animal.photos) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.medium) || 'https://i.imgur.com/aEcJUFK.png', alt: "" })),
            react_1.default.createElement("h3", null, animal.name),
            react_1.default.createElement("p", null,
                "Breed: ",
                animal.breeds.primary),
            react_1.default.createElement("p", null,
                "Color: ",
                animal.colors.primary),
            react_1.default.createElement("p", null,
                "Gender: ",
                animal.gender))));
};
exports.default = Pet;

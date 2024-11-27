"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Hero = function (_a) {
    var image = _a.image, displayText = _a.displayText;
    var type = '';
    return (react_1.default.createElement("div", { className: "hero-container", style: {
            backgroundImage: "linear-gradient(black, black), url(\"".concat(image || '/images/pets-hero.png', "\")\n          "),
            backgroundBlendMode: 'saturation',
            backgroundSize: 'cover',
            backgroundColor: '#0000008f'
        } },
        react_1.default.createElement("h2", null, displayText || getHeroTitle(type))));
};
exports.default = Hero;
var getHeroTitle = function (type) {
    switch (type) {
        case 'dog':
            return 'Dogs';
        case 'cat':
            return 'Cats';
        case 'rabbit':
            return 'Rabbits';
        case 'bird':
            return 'Birds';
        default:
            return 'Find your perfect pet';
    }
};

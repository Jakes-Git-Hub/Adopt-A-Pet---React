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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var petfinder_1 = require("../../api/petfinder");
var hero_1 = __importDefault(require("../../components/hero"));
var react_router_dom_1 = require("react-router-dom");
var PetDetailsPage = function () {
    var _a, _b, _c, _d, _e, _f;
    var _g = (0, react_1.useState)(null), data = _g[0], setData = _g[1];
    var _h = (0, react_1.useState)(true), loading = _h[0], setLoading = _h[1];
    var _j = (0, react_1.useState)(false), error = _j[0], setError = _j[1];
    var id = (0, react_router_dom_1.useParams)().id;
    (0, react_1.useEffect)(function () {
        function getPetsData() {
            return __awaiter(this, void 0, void 0, function () {
                var petsData, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, (0, petfinder_1.getPetDetails)(id)];
                        case 1:
                            petsData = _a.sent();
                            setData(petsData);
                            setError(false);
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            setError(true);
                            return [3 /*break*/, 3];
                        case 3:
                            setLoading(false);
                            return [2 /*return*/];
                    }
                });
            });
        }
        getPetsData();
    }, [id]);
    return (react_1.default.createElement("div", null, loading ? (react_1.default.createElement("h3", null, "Loading...")) : error ? (react_1.default.createElement(react_router_dom_1.Navigate, { to: "/pet-details-not-found" })) : (react_1.default.createElement("main", null,
        react_1.default.createElement(hero_1.default, { image: ((_b = (_a = data === null || data === void 0 ? void 0 : data.photos) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.full) || 'https://i.imgur.com/aEcJUFK.png', displayText: "Meet ".concat(data === null || data === void 0 ? void 0 : data.name) }),
        react_1.default.createElement("div", { className: "pet-detail" },
            react_1.default.createElement("div", { className: "pet-image-container" },
                react_1.default.createElement("img", { className: "pet-image", src: ((_d = (_c = data === null || data === void 0 ? void 0 : data.photos) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.medium) || 'https://i.imgur.com/aEcJUFK.png', alt: "Pet" })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("h1", null, data === null || data === void 0 ? void 0 : data.name),
                react_1.default.createElement("h3", null,
                    "Breed: ", (_e = data === null || data === void 0 ? void 0 : data.breeds) === null || _e === void 0 ? void 0 :
                    _e.primary),
                react_1.default.createElement("p", null,
                    "Color: ",
                    ((_f = data === null || data === void 0 ? void 0 : data.colors) === null || _f === void 0 ? void 0 : _f.primary) || 'Unknown'),
                react_1.default.createElement("p", null,
                    "Gender: ", data === null || data === void 0 ? void 0 :
                    data.gender),
                react_1.default.createElement("h3", null, "Description"),
                react_1.default.createElement("p", null, data === null || data === void 0 ? void 0 : data.description)))))));
};
exports.default = PetDetailsPage;

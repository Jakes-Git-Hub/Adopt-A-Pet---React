"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var home_1 = __importDefault(require("./pages/home"));
var search_1 = __importDefault(require("./pages/search"));
var detail_1 = __importDefault(require("./pages/detail"));
var petDetailsNotFound_1 = __importDefault(require("./pages/petDetailsNotFound"));
var root_1 = __importDefault(require("./components/root"));
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var appRouter = (0, react_router_dom_1.createBrowserRouter)((0, react_router_dom_1.createRoutesFromElements)(react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(root_1.default, null) },
    react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(home_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: ':type', element: react_1.default.createElement(home_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: ':type/:id', element: react_1.default.createElement(detail_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: 'search', element: react_1.default.createElement(search_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: 'pet-details-not-found', element: react_1.default.createElement(petDetailsNotFound_1.default, null) }))));
function App() {
    return (react_1.default.createElement(react_router_dom_1.RouterProvider, { router: appRouter }));
}
exports.default = App;

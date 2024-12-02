import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
const appRouter = createBrowserRouter(createRoutesFromElements(_jsxs(Route, { path: '/', element: _jsx(Root, {}), children: [_jsx(Route, { index: true, element: _jsx(HomePage, {}) }), _jsx(Route, { path: ':type', element: _jsx(HomePage, {}) }), _jsx(Route, { path: ':type/:id', element: _jsx(PetDetailsPage, {}) }), _jsx(Route, { path: 'search', element: _jsx(SearchPage, {}) }), _jsx(Route, { path: 'pet-details-not-found', element: _jsx(PetDetailsNotFound, {}) })] })));
function App() {
    return (_jsx(RouterProvider, { router: appRouter }));
}
export default App;

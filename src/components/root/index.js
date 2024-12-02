import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Navigation from '../navigation';
// import Outlet
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Navigation, {}), _jsx(Outlet, {})] }));
};
export default Root;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    const [petTypes, setPetTypes] = useState([]);
    useEffect(() => {
        async function getPetTypesData() {
            const { types } = await getPetTypes();
            setPetTypes(types);
        }
        getPetTypesData();
    }, []);
    return (_jsxs("nav", { children: [_jsxs("div", { className: "nav-logo", children: [_jsx("img", { src: Logo, alt: "Petlover" }), _jsx(Search, {})] }), _jsxs("ul", { className: "nav-links", children: [_jsx("li", { children: _jsx(NavLink, { to: "/", className: ({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link', children: "All Pets" }) }, 'all'), petTypes
                        ? petTypes.map((type) => (_jsxs("li", { children: [_jsxs(NavLink, { to: `/${type._links.self.href.split('/').pop()}`, className: ({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link', children: [type.name, "s"] }, type.name), ' '] }, type.name)))
                        : 'Loading...'] })] }));
};
export default Navigation;

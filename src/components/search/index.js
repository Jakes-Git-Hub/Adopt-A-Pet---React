import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
const Search = () => {
    const navigate = useNavigate();
    const searchInputRef = useRef(null);
    const onSearchHandler = (e) => {
        e.preventDefault();
        const searchQuery = {
            name: searchInputRef.current?.value || ''
        };
        const query = createSearchParams(searchQuery);
        navigate({
            pathname: '/search',
            search: `?${query}`
        });
    };
    return (_jsxs("form", { onSubmit: onSearchHandler, className: "search-form", children: [_jsx("input", { type: "text", className: "search", ref: searchInputRef }), _jsx("button", { type: "submit", className: "search-button", children: "\uD83D\uDD0E" })] }));
};
export default Search;

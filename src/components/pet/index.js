import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Pet = ({ animal }) => {
    return (_jsx("a", { href: `/${animal.type?.toLowerCase() || 'unknown'}/${animal.id}`, className: "pet", children: _jsxs("article", { children: [_jsx("div", { className: "pet-image-container", children: _jsx("img", { className: "pet-image", src: animal.photos?.[0]?.medium || 'https://i.imgur.com/aEcJUFK.png', alt: "" }) }), _jsx("h3", { children: animal.name }), _jsxs("p", { children: ["Breed: ", animal.breeds.primary] }), _jsxs("p", { children: ["Color: ", animal.colors.primary] }), _jsxs("p", { children: ["Gender: ", animal.gender] })] }) }, animal.id));
};
export default Pet;

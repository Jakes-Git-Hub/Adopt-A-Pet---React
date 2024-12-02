import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
const PetDetailsNotFound = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    return (_jsxs("main", { className: "page", children: [_jsx("h3", { children: "404: Who let the dogs out?" }), _jsx("p", { children: "Sorry, but the details for this pet have not been uploaded by the shelter yet. Check back later!" }), _jsx("img", { src: "https://i.chzbgr.com/full/8362031616/h9EB970C5/weve-lost-our-corgination", alt: "" }), _jsx("div", { className: "actions-container", children: _jsx("button", { className: "button", onClick: goHome, children: "Go Home" }) })] }));
};
export default PetDetailsNotFound;

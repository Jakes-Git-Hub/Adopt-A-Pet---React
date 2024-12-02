import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { getPets } from '../../api/petfinder';
import Hero from '../../components/hero';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const HomePage = () => {
    const [data, setData] = useState(null);
    const { type } = useParams();
    useEffect(() => {
        async function getPetsData() {
            const petsData = await getPets(type);
            setData(petsData);
        }
        getPetsData();
    }, [type]);
    if (!data) {
        return _jsx("h2", { children: "Loading..." });
    }
    return (_jsxs("div", { className: "page", children: [_jsx(Hero, {}), _jsxs("h3", { children: [_jsx("span", { className: "pet-type-label", children: type ? `${type}s` : 'Pets' }), ' ', "available for adoption near you"] }), data.length ? (_jsx("div", { className: "grid", children: data.map((animal) => (_jsx(Link, { to: `/${animal.type?.toLowerCase()}/${animal.id}`, className: "pet", children: _jsxs("article", { children: [_jsx("div", { className: "pet-image-container", children: _jsx("img", { className: "pet-image", src: animal.photos?.[0]?.medium ||
                                        '/images/missing-animal.png', alt: "" }) }), _jsx("h3", { children: animal.name }), _jsxs("p", { children: ["Breed: ", animal.breeds.primary] }), _jsxs("p", { children: ["Color: ", animal.colors.primary] }), _jsxs("p", { children: ["Gender: ", animal.gender] })] }) }, animal.id))) })) : (_jsxs("p", { className: "prompt", children: ["No ", type, "s available for adoption now."] }))] }));
};
export default HomePage;

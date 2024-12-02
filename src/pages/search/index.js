import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Hero from '../../components/hero';
import { getPets } from '../../api/petfinder';
import Pet from '../../components/pet';
import { useSearchParams } from 'react-router-dom';
const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const petNameToFind = searchParams.get('name') || '';
    const [pets, setPets] = useState([]);
    useEffect(() => {
        async function getPetsData() {
            const petsData = await getPets('', petNameToFind);
            setPets(petsData);
        }
        getPetsData();
    }, [petNameToFind]);
    return (_jsxs("div", { className: "page", children: [_jsx(Hero, { displayText: `Results for ${petNameToFind}` }), _jsx("h3", { children: "Pets available for adoption near you" }), _jsx("main", { children: _jsx("div", { className: "grid", children: pets && pets.map((pet) => (_jsx(Pet, { animal: pet }, pet.id))) }) })] }));
};
export default SearchPage;

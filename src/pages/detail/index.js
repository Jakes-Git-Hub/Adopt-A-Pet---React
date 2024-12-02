import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { getPetDetails } from '../../api/petfinder';
import Hero from '../../components/hero';
import { useParams, Navigate } from 'react-router-dom';
const PetDetailsPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        async function getPetsData() {
            try {
                const petsData = await getPetDetails(id);
                setData(petsData);
                setError(false);
            }
            catch (e) {
                setError(true);
            }
            setLoading(false);
        }
        getPetsData();
    }, [id]);
    return (_jsx("div", { children: loading ? (_jsx("h3", { children: "Loading..." })) : error ? (_jsx(Navigate, { to: "/pet-details-not-found" })) : (_jsxs("main", { children: [_jsx(Hero, { image: data?.photos?.[1]?.full || 'https://i.imgur.com/aEcJUFK.png', displayText: `Meet ${data?.name}` }), _jsxs("div", { className: "pet-detail", children: [_jsx("div", { className: "pet-image-container", children: _jsx("img", { className: "pet-image", src: data?.photos?.[0]?.medium || 'https://i.imgur.com/aEcJUFK.png', alt: "Pet" }) }), _jsxs("div", { children: [_jsx("h1", { children: data?.name }), _jsxs("h3", { children: ["Breed: ", data?.breeds?.primary] }), _jsxs("p", { children: ["Color: ", data?.colors?.primary || 'Unknown'] }), _jsxs("p", { children: ["Gender: ", data?.gender] }), _jsx("h3", { children: "Description" }), _jsx("p", { children: data?.description })] })] })] })) }));
};
export default PetDetailsPage;

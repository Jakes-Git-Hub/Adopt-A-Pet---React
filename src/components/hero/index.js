import { jsx as _jsx } from "react/jsx-runtime";
const Hero = ({ image, displayText }) => {
    const type = '';
    return (_jsx("div", { className: "hero-container", style: {
            backgroundImage: `linear-gradient(black, black), url("${image || '/images/pets-hero.png'}")
          `,
            backgroundBlendMode: 'saturation',
            backgroundSize: 'cover',
            backgroundColor: '#0000008f'
        }, children: _jsx("h2", { children: displayText || getHeroTitle(type) }) }));
};
export default Hero;
const getHeroTitle = (type) => {
    switch (type) {
        case 'dog':
            return 'Dogs';
        case 'cat':
            return 'Cats';
        case 'rabbit':
            return 'Rabbits';
        case 'bird':
            return 'Birds';
        default:
            return 'Find your perfect pet';
    }
};

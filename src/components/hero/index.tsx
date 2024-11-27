import React from 'react';

interface HeroProps {
  image?: string | null;
  displayText?: string | null;
}

const Hero: React.FC<HeroProps> = ({ image, displayText }) => {
  const type = ''

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(black, black), url("${
          image || '/images/pets-hero.png'
        }")
          `,
        backgroundBlendMode: 'saturation',
        backgroundSize: 'cover',
        backgroundColor: '#0000008f'
      }}
    >
      <h2>{displayText || getHeroTitle(type)}</h2>
    </div>
  );
};

export default Hero;

const getHeroTitle = (type: string): string => {
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

import React from 'react';

interface Pet {
  id: number;
  type: string | null;
  breeds: {
    primary: string | null;
    secondary: string | null;
    mixed: boolean | null;
    unknown: boolean | null;
  };
  colors: {
    primary: string | null;
    secondary: string | null;
    tertiary: string | null;
  };
  gender: string | null;
  name: string | null;
  photos: {
    small: string | null;
    medium: string | null;
    large: string | null;
    full: string | null;
  }[] | null;
}

interface PetProps { 
  animal: Pet;
}

const Pet: React.FC<PetProps> = ({ animal }) => {
  return (
    <a
      key={animal.id}
      href={`/${animal.type?.toLowerCase() || 'unknown'}/${animal.id}`}
      className="pet"
    >
      <article>
        <div className="pet-image-container">
          {
            <img
              className="pet-image"
              src={
                animal.photos?.[0]?.medium || 'https://i.imgur.com/aEcJUFK.png'
              }
              alt=""
            />
          }
        </div>
        <h3>{animal.name}</h3>
        <p>Breed: {animal.breeds.primary}</p>
        <p>Color: {animal.colors.primary}</p>
        <p>Gender: {animal.gender}</p>
      </article>
    </a>
  );
};

export default Pet;

import React, { useEffect, useState } from 'react';
import { getPets } from '../../api/petfinder';
import Hero from '../../components/hero';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


interface Pet {
  id: number;
  organization_id: string | null;
  url: string | null;
  type: string | null;
  species: string | null;
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
  age: string | null;
  gender: string | null;
  size: string | null;
  coat: string | null;
  attributes: {
    spayed_neutered: boolean | null;
    house_trained: boolean | null;
    declawed: boolean | null;
    special_needs: boolean | null;
    shots_current: boolean | null;
  };
  environment: {
    children: boolean | null;
    dogs: boolean | null;
    cats: boolean | null;
  };
  tags: string[] | null;
  name: string | null;
  description: string | null;
  organization_animal_id: string | null;
  photos: {
    small: string | null;
    medium: string | null;
    large: string | null;
    full: string | null;
  }[] | null;
  primary_photo_cropped: {
    small: string | null;
    medium: string | null;
    large: string | null;
    full: string | null;
  } | null;
  videos: {
    embed: string | null;
  }[] | null;
  status: string | null;
  status_changed_at: string | null;
  published_at: string | null;
  distance: number | null;
  contact: {
    email: string | null;
    phone: string | null;
    address: {
      address1: string | null;
      address2: string | null;
      city: string | null;
      state: string | null;
      postcode: string | null;
      country: string | null;
    } | null;
  } | null;
  _links: {
    self: { href: string | null };
    type: { href: string | null };
    organization: { href: string | null };
  } | null;
}

const HomePage = () => {
  const [data, setData] = useState<Pet[] | null>(null);
  const { type } = useParams<{ type: string }>(); 

  useEffect(() => {
    async function getPetsData() {
      const petsData = await getPets(type);
      setData(petsData);
    }

    getPetsData();
  }, [type]);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page">
      <Hero />
      <h3>
        <span className="pet-type-label">{type ? `${type}s` : 'Pets'}</span>{' '}
        available for adoption near you
      </h3>

      {data.length ? (
        <div className="grid">
          {data.map((animal) => (
            <Link 
              key={animal.id}
              to={`/${animal.type?.toLowerCase()}/${animal.id}`}
              className="pet"
            >
              <article>
                <div className="pet-image-container">
                  {
                    <img
                      className="pet-image"
                      src={
                        animal.photos?.[0]?.medium ||
                        '/images/missing-animal.png'
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
            </Link> 
          ))}
        </div>
      ) : (
        <p className="prompt">No {type}s available for adoption now.</p>
      )}
    </div>
  );
};

export default HomePage;

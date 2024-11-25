import React, { useEffect, useState } from 'react';
import { getPetDetails } from '../../api/petfinder';
import Hero from '../../components/hero';
import { useParams, Navigate } from 'react-router-dom';

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

const PetDetailsPage: React.FC = () => {
  const [data, setData] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function getPetsData() {
      try {
        const petsData = await getPetDetails(id!);
        setData(petsData);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }
    getPetsData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <Navigate to="/pet-details-not-found" />
      ) : (
        <main>
          <Hero
            image={data?.photos?.[1]?.full || 'https://i.imgur.com/aEcJUFK.png'}
            displayText={`Meet ${data?.name}`}
          />
          <div className="pet-detail">
            <div className="pet-image-container">
              <img
                className="pet-image"
                src={
                  data?.photos?.[0]?.medium || 'https://i.imgur.com/aEcJUFK.png'
                }
                alt="Pet"
              />
            </div>
            <div>
              <h1>{data?.name}</h1>
              <h3>Breed: {data?.breeds?.primary}</h3>
              <p>Color: {data?.colors?.primary || 'Unknown'}</p>
              <p>Gender: {data?.gender}</p>
              <h3>Description</h3>
              <p>{data?.description}</p>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default PetDetailsPage;

import { rest } from 'msw';
import types from './data/types.json';
import animals from './data/animals.json';
import details from './data/details.json';

interface AnimalDetails {
  id: number;
  organization_id: string;
  url: string;
  type: string;
  species: string;
  breeds: {
    primary: string;
    secondary: string | null;
    mixed: boolean;
    unknown: boolean;
  };
  colors: {
    primary: string | null;
    secondary: string | null;
    tertiary: string | null;
  };
  age: string;
  gender: string;
  size: string;
  coat: string | null;
  attributes: {
    spayed_neutered: boolean;
    house_trained: boolean;
    declawed: boolean | null;
    special_needs: boolean;
    shots_current: boolean;
  };
  environment: {
    children: boolean | null;
    dogs: boolean | null;
    cats: boolean | null;
  };
  tags: string[];
  name: string;
  description: string | null;
  organization_animal_id: string | null;
  photos: {
    small: string;
    medium: string;
    large: string;
    full: string;
  }[];
  primary_photo_cropped: {
    small: string;
    medium: string;
    large: string;
    full: string;
  } | null;
  videos: {
    embed: string;
  }[];
  status: string;
  status_changed_at: string;
  published_at: string;
  distance: number | null;
  contact: {
    email: string;
    phone: string | null;
    address: {
      address1: string | null;
      address2: string | null;
      city: string;
      state: string;
      postcode: string;
      country: string;
    };
  };
  _links: {
    self: { href: string };
    type: { href: string };
    organization: { href: string };
  };
}

interface Details {
  [key: string]: AnimalDetails;
}

export const handlers = [
  rest.get('/types', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(types));
  }),
  rest.get('/animals', (req, res, ctx) => {
    const type = req.url.searchParams.get('type');
    const query = req.url.searchParams.get('query');
    let response = animals.animals;

    if (type && type !== '') {
      response = response.filter(
        (animal) => animal.type.toLowerCase() === type.toLowerCase()
      );
    }
    if (query && query !== '') {
      response = response.filter(
        (animal) =>
          animal.contact.address.state
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          animal.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get('/animals/:id', (req, res, ctx) => {
    const { id } = req.params as { id: string };
    let response = (details as Details)[id];
    if (!response) {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.json(response));
  })
];

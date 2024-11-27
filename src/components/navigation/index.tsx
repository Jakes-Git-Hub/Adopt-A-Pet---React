import React, { useEffect, useState } from 'react';
import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';
import { NavLink } from 'react-router-dom';

interface PetType {
  name: string;
  _links: {
    self: {
      href: string;
    };
  };
}

const Navigation: React.FC = () => {
  const [petTypes, setPetTypes] = useState<PetType[]>([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }

    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="Petlover" />
        <Search />
      </div>
      <ul className="nav-links">
        <li key={'all'}>
          <NavLink to="/"
            className={ ({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
          >
            All Pets
          </NavLink>
        </li>
        {petTypes
          ? petTypes.map((type) => (
              <li key={type.name}>
                <NavLink to={`/${type._links.self.href.split('/').pop()}`}
                  key={type.name}
                  className={ ({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}               >
                  {type.name}s
                </NavLink>{' '}
              </li>
            ))
          : 'Loading...'}
      </ul>
    </nav>
  );
};

export default Navigation;

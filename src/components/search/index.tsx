import React, { useRef, FormEvent } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

const Search: React.FC = () => {

  const navigate = useNavigate();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const onSearchHandler = (e: FormEvent) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current?.value || ''
    }

    const query = createSearchParams(searchQuery);

    navigate({
      pathname: '/search',
      search: `?${query}`
    });
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;

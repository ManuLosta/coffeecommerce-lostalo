import { useState } from 'react';
import searchIcon from '../../assets/icons/search-icon.svg';
import './Search.scss';
import { useHistory } from 'react-router-dom';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  let history = useHistory();

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.length > 0) {
      history.push(`/search/${query}`);
      onSearch();
    } else {
      return;
    }
  };

  return (
    <div className="Search">
      <img src={searchIcon} alt="Search icon" />
      <form onSubmit={handleSubmit}>
        <input
          className="Search__input"
          onChange={handleChange}
          type="text"
          value={query}
          spellCheck={false}
        />
        <input className="Search__submit" type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default Search;

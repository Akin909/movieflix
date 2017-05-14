import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';

import { Input } from './../styles/components';

const Search = styled(Input)`
  width: 15rem;
  margin:0;
`;
const Datalist = styled.datalist`
  width: 15rem;
`;

const SearchBar = ({ searchResults, handleChange, value }) => (
  <div>
    <Search list="search-results" value={value} onChange={handleChange} />
    <Datalist id="search-results">
      {searchResults.map(result => (
        <option key={uuid()} value={result.title} />
      ))}
    </Datalist>
  </div>
);

export default SearchBar;

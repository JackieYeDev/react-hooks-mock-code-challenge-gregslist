import React, { useState } from 'react';

function Search({ onFilterSubmit }) {
  const [formData, setFormData] = useState({
    search: '',
  });
  function handleSubmit(e) {
    e.preventDefault();
    onFilterSubmit(formData.search);
  }
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <input
        type='text'
        id='search'
        placeholder='search free stuff'
        value={formData.search}
        onChange={handleInputChange}
      />
      <button type='submit'>🔍</button>
    </form>
  );
}

export default Search;

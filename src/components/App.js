import React, { useState, useEffect } from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';

function App() {
  const [listings, setListings] = useState([]);
  const [filteredListing, setFilteredListing] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setFilteredListing(data);
      });
  }, []);

  function handleFilterSubmit(input) {
    setFilteredListing(
      input === ''
        ? listings
        : listings.filter((listing) =>
            listing.description.toLowerCase().includes(input.toLowerCase())
          )
    );
  }

  function handleItemDelete(id) {
    const updatedListing = listings.filter((listing) => listing.id !== id);
    setListings(updatedListing);
    setFilteredListing(listings);
  }

  return (
    <div className='app'>
      <Header onFilterSubmit={handleFilterSubmit} />
      <ListingsContainer
        listings={filteredListing}
        onItemDelete={handleItemDelete}
      />
    </div>
  );
}

export default App;

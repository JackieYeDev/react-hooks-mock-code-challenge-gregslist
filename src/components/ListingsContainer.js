import React, { useState, useEffect } from 'react';
import ListingCard from './ListingCard';
// import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onItemDelete }) {
  return (
    <main>
      <ul className='cards'>
        {listings.map((listing, index) => (
          <ListingCard
            key={index}
            listing={listing}
            onItemDelete={onItemDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;

import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const id = props.id;
  const favourites = props.favourites;
  
  const toggleLiked = function() {
    props.toggleFavourite(id);
 
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={toggleLiked}>
        <FavIcon selected={favourites.includes(id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isLiked, setLiked] = useState(false);

  const toggleLiked = function() {
    console.log("Fav button clicked!");
    console.log(isLiked);
    setLiked(!isLiked);
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={toggleLiked}>
        <FavIcon selected={isLiked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
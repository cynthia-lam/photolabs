import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isLiked, setLiked] = useState(false);
  const id = props.id;

  const toggleLiked = function() {
    setLiked(!isLiked);

    props.toggleFavourite(id);
    console.log(id);
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
import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // const [isLiked, setLiked] = useState(false);
  const {id, favourites, isFavourite} = props;

  const favourited = isFavourite(id);

  const toggleLiked = function() {
    props.toggleFavourite(id);
    console.log(id);
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={toggleLiked}>
        <FavIcon selected={favourited}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
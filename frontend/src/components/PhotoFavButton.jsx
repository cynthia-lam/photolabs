import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isLiked, setLiked] = useState(false);

  const toggleLiked = function() {
    console.log("Fav button clicked!");
    console.log(isLiked);
    setLiked(!isLiked);
    
    if (!isLiked) {              // if it wasn't already liked, toggling it should add one to favCount
      props.updateFavCount(1);
    } else {                     // if it wasn liked, toggling it should subtract one to favCount
      props.updateFavCount(-1);
    }
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
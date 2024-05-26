import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map(photo =>
        <PhotoListItem 
        key={photo.id} 
        photo={photo} 
        toggleFavourite={props.toggleFavourite} 
        favourites={props.favourites} 
        isFavourite={props.isFavourite}
        toggleModal={props.toggleModal}
        updateModalPhoto={props.updateModalPhoto}/>
      )}
    </ul>
  );
};

export default PhotoList;

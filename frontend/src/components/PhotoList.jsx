import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  console.log("favs: ", props.favourites);
  return (
    <ul className="photo-list">
      {props.photos.map(photo =>
        <PhotoListItem 
        key={photo.id} 
        photo={photo} 
        toggleFavourite={props.toggleFavourite} 
        favourites={props.favourites} 
        isFavourite={props.isFavourite}
        toggleModal={props.toggleModal}/>
      )}
    </ul>
  );
};

export default PhotoList;

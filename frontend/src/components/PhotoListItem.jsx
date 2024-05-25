import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} toggleFavourite={props.toggleFavourite}/>
      <img src={urls.full} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{user.username}</p>
          <div className="photo-list__user-location">
            <p>{location.city}, {location.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

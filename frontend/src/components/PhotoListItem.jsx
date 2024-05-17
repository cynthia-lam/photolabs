import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, username, imageSource, location, profile } = props.data;

  return (
    <div className="photo-list__item">
      <img src={imageSource} className="photo-list__image"/>
      <img src={profile} />
      <p>{username}</p>
      <p>{location.city}, {location.country}</p>
    </div>
  );
};

export default PhotoListItem;

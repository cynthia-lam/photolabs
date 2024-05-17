import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, username, imageSource, location, profile } = props.data;

  return (
    <div className="photo-list__item">
      <img src={imageSource} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info.">
          <p>{username}</p>
        </div>
      </div>
      <div className="photo-list__user-location">
        <p>{location.city}, {location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;

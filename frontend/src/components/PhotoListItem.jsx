import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, username, imageSource, location, profile } = props.data;

  return (
    <div className="photoListItem">
      <p>{username}</p>
      <img src={imageSource} />
      <p>{location.city}, {location.country}</p>
      <img src={profile} />
    </div>
  );
};

export default PhotoListItem;

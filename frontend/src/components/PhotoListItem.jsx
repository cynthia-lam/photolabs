import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, username, imageSource, location, profile } = props.data;

  return (
    <div className="photoListItem">
      <p>{props.data.username}</p>
      <img src={props.data.imageSource} />
      <p>{props.data.location}</p>
      <img src={props.data.profile} />
    </div>
  );
};

export default PhotoListItem;

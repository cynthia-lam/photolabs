import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, slug, title } = props.topic;

  return (
    <div className="topic-list__item">
      <p onClick={() => props.setTopicId(id)}>{title} </p>
    </div>
  );
};

export default TopicListItem;

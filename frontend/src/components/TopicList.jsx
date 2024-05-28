import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map(topic =>
        <TopicListItem key={topic.id} topic={topic} setTopicId={props.setTopicId}/>
      )}
    </div>
  );
};

export default TopicList;

import React from 'react';

import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics_and_fav">
      <TopicList topics={props.topics} setTopicId={props.setTopicId}/>
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} selected={props.isFavPhotoExist}/>
      </div>
    </div>
  )
}

export default TopNavigation;
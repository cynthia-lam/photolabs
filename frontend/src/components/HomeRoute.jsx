import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics}/>
      <PhotoList photos={props.photos}/>
    </div>
  );
};

export default HomeRoute;

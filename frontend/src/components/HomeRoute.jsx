import React from 'react';

import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import './HomeRoute.scss';

// Note: Rendering a single component to build components in isolation
const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;

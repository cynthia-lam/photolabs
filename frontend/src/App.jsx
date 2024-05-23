import React from 'react';

import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photosToDisplay = 3;
  // const photoArray = new Array(photosToDisplay).fill().map((_, index) => 
  //   <PhotoListItem key={index} data={sampleDataForPhotoListItem}/>
  // );

  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default App;

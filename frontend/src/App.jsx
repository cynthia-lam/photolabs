import React, { useState } from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal} = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
      photos={state.photoData} 
      topics={topics} 
      toggleModal={onClosePhotoDetailsModal}
      updateModalPhoto={setPhotoSelected}
      toggleFavourite={updateToFavPhotoIds} 
      favourites={state.favourites}/>

      <PhotoDetailsModal 
      isModalOpen={state.isModalOpen} 
      toggleModal={onClosePhotoDetailsModal} 
      modalPhoto={state.modalPhoto}
      photos={state.photoData} // note need to change this to similar topics, map photos where photo.topic == state.topic
      toggleFavourite={updateToFavPhotoIds} 
      favourites={state.favourites} 
      updateModalPhoto={setPhotoSelected}/>
    </div>
  );
};

export default App;

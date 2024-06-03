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
    onClosePhotoDetailsModal,
    setTopicId} = useApplicationData();
  return (
    <div className="App">
      <HomeRoute 
      photos={state.photoData} 
      topics={state.topicData} 
      toggleModal={onClosePhotoDetailsModal}
      updateModalPhoto={setPhotoSelected}
      toggleFavourite={updateToFavPhotoIds} 
      favourites={state.favourites}
      setTopicId={setTopicId}/>

      <PhotoDetailsModal 
      isModalOpen={state.isModalOpen} 
      toggleModal={onClosePhotoDetailsModal} 
      modalPhoto={state.modalPhoto}
      photos={state.modalPhoto.similar_photos}
      toggleFavourite={updateToFavPhotoIds} 
      favourites={state.favourites} 
      updateModalPhoto={setPhotoSelected}/>
    </div>
  );
};

export default App;

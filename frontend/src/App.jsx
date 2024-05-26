import React, { useState } from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState({});

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  // need new fxn for updating photo
  const updateModalPhoto = (photo) => {
    setModalPhoto(photo);
  }

  return (
    <div className="App">
      <HomeRoute 
      photos={photos} 
      topics={topics} 
      toggleModal={toggleModal}
      updateModalPhoto={updateModalPhoto}/>

      <PhotoDetailsModal 
      isModalOpen={isModalOpen} 
      toggleModal={toggleModal} 
      modalPhoto={modalPhoto}/>
    </div>
  );
};

export default App;

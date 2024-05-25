import React, { useState } from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    isModalOpen ? 
    setModalOpen(false) :
    setModalOpen(true)
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal}/>
      <PhotoDetailsModal isModalOpen={isModalOpen}/>
    </div>
  );
};

export default App;

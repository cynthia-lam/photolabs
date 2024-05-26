import React, { useState } from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (props) => {
    setModalOpen(!isModalOpen);
    console.log(props);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal}/>
      <PhotoDetailsModal isModalOpen={isModalOpen} toggleModal={toggleModal}/>
    </div>
  );
};

export default App;

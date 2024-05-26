import React, { useState } from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favourites, setFavourites] = useState([]);

  const isFavourite = function(id) {
    return favourites.includes(id);
  }

  // adds or removes id from favourites array
  const toggleFavourite = function(id) {
    if (isFavourite(id)) {
      setFavourites((prevState) => {
        return prevState.filter((elem) => elem !== id);
      });
    } else {
      setFavourites((prevState) => ([...prevState, id]));
    }
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState({});

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const updateModalPhoto = (photo) => {
    setModalPhoto(photo);
  }

  return (
    <div className="App">
      <HomeRoute 
      photos={photos} 
      topics={topics} 
      toggleModal={toggleModal}
      updateModalPhoto={updateModalPhoto}
      toggleFavourite={toggleFavourite} 
      favourites={favourites} 
      isFavourite={isFavourite}/>

      <PhotoDetailsModal 
      isModalOpen={isModalOpen} 
      toggleModal={toggleModal} 
      modalPhoto={modalPhoto}
      photos={photos}
      toggleFavourite={toggleFavourite} 
      favourites={favourites} 
      isFavourite={isFavourite}
      updateModalPhoto={updateModalPhoto}/>
    </div>
  );
};

export default App;

import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const {isModalOpen, toggleModal, modalPhoto, photos, toggleFavourite, favourites, updateModalPhoto} = props;
  console.log(modalPhoto);

  return (
    isModalOpen &&
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>

      <img src={modalPhoto.urls.full} className="photo-details-modal__image"/>
      <div className="photo-details-modal__header">
        <img src={modalPhoto.user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{modalPhoto.user.username}</p>
          <div className="photo-list__user-location">
            <p>{modalPhoto.location.city}, {modalPhoto.location.country}</p>
          </div>
        </div>
      </div>

      <PhotoList className='photo-details-modal__images'
      photos={photos} 
      toggleFavourite={toggleFavourite} 
      favourites={favourites} 
      toggleModal={toggleModal}
      updateModalPhoto={updateModalPhoto}/>
    </div>
  )
};

export default PhotoDetailsModal;

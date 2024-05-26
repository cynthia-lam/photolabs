import { useState } from "react";


const useApplicationData = function() {
  // single state object
  const [state, setState] = useState({
    isModalOpen: false,
    modalPhoto: {},
    favourites: []
  });

  // const isFavourite = function(id) {
  //   return favourites.includes(id);
  // }

  // adds or removes id from favourites array
  const toggleFavourite = function(id) {
    if (state.favourites.includes(id)) {
      setState((prevState) => ({ ...prevState, favourites: prevState.favourites.filter((elem) => elem !== id) }));
    } else {
      setState((prevState) => ({ ...prevState, favourites: [...prevState.favourites, id]}));
    }
  };
  
  const setPhotoSelected = (photo) => {
    setState(prevState => ({ ...prevState, modalPhoto: photo }))
  };

  const toggleModal = () => {
    setState(prevState => ({ ...prevState, isModalOpen: !prevState.isModalOpen }));
  };

  return(
    { state,
    updateToFavPhotoIds: toggleFavourite,
    setPhotoSelected,
    onClosePhotoDetailsModal: toggleModal}
  )
}

export default useApplicationData;
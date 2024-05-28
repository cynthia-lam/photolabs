import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favourites: [...state.favourites, action.payload.id] }
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favourites: [...state.favourites.filter((elem) => elem !== action.payload.id)] }
    case ACTIONS.SELECT_PHOTO:
      return { ...state, modalPhoto: action.payload.photo }
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isModalOpen: !state.isModalOpen }
    // case ACTIONS.SET_TOPIC_DATA:
    //   return { /* insert logic */ }
    //     case ACTIONS.SET_PHOTO_DATA: // from API call to set photo state
    // return { /* insert logic */ }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  favourites: [],
  modalPhoto: {},
  isModalOpen: false
};

const useApplicationData = function() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (photoId) => {
    console.log('toggleFav', photoId)
    if (state.favourites.includes(photoId)) {
      console.log("removing photo");
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      console.log("adding photo");
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const toggleModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  return {
    state,
    updateToFavPhotoIds: toggleFavourite,
    setPhotoSelected,
    onClosePhotoDetailsModal: toggleModal,
  };
}

export default useApplicationData;

// check reqs to see if i can change these names 
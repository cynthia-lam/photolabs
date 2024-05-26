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
      return { ...state, favourites: [...state.favourites, action.payload.id]}
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favourites: [...state.favourites.filter((elem) => elem !== action.payload.id)] }
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, modalPhoto: action.payload.photo }
    // case SET_TOPIC_DATA:
    //   return { /* insert logic */ }
    case ACTIONS.SELECT_PHOTO:
      return { ...state, isModalOpen: !state.isModalOpen }
    // case DISPLAY_PHOTO_DETAILS:
    //   return { /* insert logic */ }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  favourites: [],
  modalPhoto: null,
  isModalOpen: false
};

const useApplicationData = function() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (photo) => {
    if (state.favourites.includes(photo.id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photo.id } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photo.id } });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photo } });
  };

  const toggleModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO });
  };

  return {
    state,
    updateToFavPhotoIds: toggleFavourite,
    setPhotoSelected,
    onClosePhotoDetailsModal: toggleModal,
  };
}

export default useApplicationData;
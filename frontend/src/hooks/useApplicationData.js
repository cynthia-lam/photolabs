import { useReducer, useEffect } from "react";

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
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload }
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  favourites: [],
  modalPhoto: {},
  isModalOpen: false,
  photoData: [],
  topicData: []
};

const useApplicationData = function() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  const toggleFavourite = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
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
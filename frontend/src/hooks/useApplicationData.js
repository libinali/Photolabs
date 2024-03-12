import { useReducer, useEffect } from 'react';

const initialState = {
  photoData: [],
  topicData: [],
  showModal: false,
  selectedPhoto: null,
  selectedTopic: null,
  favoritedPhotos: []
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};


// Reducer function to handle state transitions based on actions
const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      favoritedPhotos: [...state.favoritedPhotos, action.payload.photoId]
    };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favoritedPhotos: state.favoritedPhotos.filter(id => id !== action.payload.photoId)
    };
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photoData: action.payload.photos
    };
  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topicData: action.payload.topics
    };
  case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      selectedPhoto: action.payload.photo
    };
  case ACTIONS.SELECT_TOPIC:
    return {
      ...state,
      selectedTopic: action.payload.topicId
    };
  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return {
      ...state,
      showModal: action.payload.showModal
    };
  default:
    throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to update favorited photo IDs
  const updateToFavPhotoIds = (photoId) => {

    const isFavorited = state.favoritedPhotos.includes(photoId);
    
    if (isFavorited) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    }
  };
  
  // Function to set photo data
  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
  };

  // Function to set topic data
  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };

  // Function to get photos by topic
  const getPhotosByTopic = topicId => {
    dispatch({ type: ACTIONS.SELECT_TOPIC, payload: { topicId } });
  };

  // Function to set selected photo and display photo details modal
  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo: photo } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { showModal: true } });
  };

  // Function to close photo details modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { showModal: false } });
  };

  // Fetch all photos
  const getAllPhotos = () => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: data } }));
  };
  
  // Fetch all photos on initial render
  useEffect(() => {
    getAllPhotos();
  }, []);

  // Fetch all topics on initial render
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics: data } }));
  }, []);

  // Fetch photos based on selected topic
  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`/api/topics/photos/${state.selectedTopic}`)
        .then(res => res.json())
        .then(photosByTopic => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: photosByTopic } }));
    }
  }, [state.selectedTopic]);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoData,
    setTopicData,
    getAllPhotos,
    getPhotosByTopic,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;



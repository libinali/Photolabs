import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    getAllPhotos,
    getPhotosByTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  console.log(state.selectedPhoto);
  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        getAllPhotos={getAllPhotos}
        getPhotosByTopic={getPhotosByTopic}
        setPhotoSelected={setPhotoSelected}
        toggleFavorite={updateToFavPhotoIds}
        favoritedPhotos={state.favoritedPhotos}
      />
      {state.showModal && (
        <PhotoDetailsModal
          setPhotoSelected={setPhotoSelected}
          onClose={onClosePhotoDetailsModal}
          photoData={state.selectedPhoto}
          toggleFavorite={updateToFavPhotoIds}
          isFavorited={state.favoritedPhotos.includes(state.selectedPhoto?.id)}
          favoritedPhotos={state.favoritedPhotos}
        />
      )}
    </div>
  );

};

export default App;

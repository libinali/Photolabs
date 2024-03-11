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

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        getAllPhotos={getAllPhotos}
        getPhotosByTopic={getPhotosByTopic}
        toggleModal={setPhotoSelected}
        toggleFavorite={updateToFavPhotoIds}
        favoritedPhotos={state.favoritedPhotos}
      />
      {state.showModal && (
        <PhotoDetailsModal
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

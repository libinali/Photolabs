import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
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

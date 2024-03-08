import React from 'react';
import { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photoData, setPhotoData] = useState(photos);
  const [topicData, setTopicData] = useState(topics);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  // Function to toggle favorite status of a photo
  const toggleFavorite = (photoId) => {
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter((id) => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  };
  // Function to toggle the modal visibility
  const toggleModal = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        toggleModal={toggleModal}
        toggleFavorite={toggleFavorite}
        favoritedPhotos={favoritedPhotos}
      />
      {showModal && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photoData={selectedPhoto}
          toggleFavorite={toggleFavorite}
          isFavorited={favoritedPhotos.includes(selectedPhoto?.id)}
          favoritedPhotos={favoritedPhotos}
        />
      )}
    </div>
  );

};

export default App;

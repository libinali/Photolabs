import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({ photos, topics, toggleModal, toggleFavorite, favoritedPhotos, getPhotosByTopic, getAllPhotos }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoritedPhotos={favoritedPhotos} getPhotosByTopic={getPhotosByTopic} getAllPhotos={getAllPhotos}/>
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} favoritedPhotos={favoritedPhotos} toggleModal={toggleModal}/>
    </div>
  );
  
};


export default HomeRoute;

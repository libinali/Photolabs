import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({ photos, topics, toggleFavorite, favoritedPhotos, getPhotosByTopic, getAllPhotos, setPhotoSelected }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoritedPhotos={favoritedPhotos} getPhotosByTopic={getPhotosByTopic} getAllPhotos={getAllPhotos}/>
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} favoritedPhotos={favoritedPhotos} setPhotoSelected={setPhotoSelected} />
    </div>
  );
  
};


export default HomeRoute;

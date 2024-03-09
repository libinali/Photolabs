import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos, toggleFavorite, favoritedPhotos, toggleModal}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) =>
        <li key={index}>
          <PhotoListItem
            key={index}
            imageSource={photo.urls.regular}
            id={photo.id}
            profile={photo.user.profile}
            username={photo.user.username}
            city={photo.location.city}
            country={photo.location.country}
            isFavorited={favoritedPhotos.includes(photo.id)}
            onToggleFavorite={() => toggleFavorite(photo.id)}
            toggleModal={toggleModal}
            similarPhotos={photo.similarPhotos ? Object.values(photo.similarPhotos) : []}
            favoritedPhotos={favoritedPhotos}
          />
        </li>
      )}
    </ul>
  );
};

export default PhotoList;

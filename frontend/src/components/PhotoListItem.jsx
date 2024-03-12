import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, imageSource, profile, username, city, country, isFavorited, onToggleFavorite, setPhotoSelected, similarPhotos }) => {

  const handleClick = () => {
    setPhotoSelected({
      imageSource,
      id,
      profile,
      username,
      city,
      country,
      isFavorited,
      onToggleFavorite,
      similarPhotos
    });
  };

  return (
    <article className="photo-list__item">
      <PhotoFavButton isFavorited={isFavorited} onToggleFavorite={onToggleFavorite} />
      <img className="photo-list__image" src={imageSource} alt="" onClick={handleClick}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt="" />
        <div className="photo-list__user-info">
          <span>{username}</span>
          <div className="photo-list__user-location ">
            {city}, {country}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;

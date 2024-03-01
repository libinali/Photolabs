import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ imageSource, profile, username, city, country }) => {
  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={imageSource} alt="" />
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

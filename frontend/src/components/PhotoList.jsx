import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) =>
        <li key={index}>
          <PhotoListItem
            key={index}
            imageSource={photo.urls.regular}
            profile={photo.user.profile}
            username={photo.user.username}
            city={photo.location.city}
            country={photo.location.country}
          />
        </li>
      )}
    </ul>
  );
};

export default PhotoList;

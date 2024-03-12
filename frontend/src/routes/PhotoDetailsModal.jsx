import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
/* eslint-disable camelcase */

const PhotoDetailsModal = ({ onClose, photoData, isFavorited, toggleFavorite, favoritedPhotos, setPhotoSelected }) => {
  const { id, similar_photos, urls, user, location } = photoData;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton isFavorited={isFavorited} onToggleFavorite={() => toggleFavorite(id)} />
        <img className="photo-details-modal__image" src={urls.full} alt={`Image taken in ${location.city}, ${location.country}`} />
        <div className="photo-details-modal__header ">
          <div className='photo-details-modal__photographer-details'>
            <img className="photo-details-modal__photographer-profile " src={user.profile} alt={`Profile for ${user.username}`} />
            <div className="photo-details-modal__photographer-info">
              <span>{user.username}</span>
              <div className="photo-details-modal__photographer-location">
                {location.city}, {location.country}
              </div>
            </div>
          </div>
        </div>
        <p className='photo-details-modal__header'>Similar Photos</p>
      </div>
      <div className='photo-details-modal__top-bar'>
        <PhotoList photos={similar_photos} toggleFavorite={toggleFavorite} favoritedPhotos={favoritedPhotos} setPhotoSelected={setPhotoSelected}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

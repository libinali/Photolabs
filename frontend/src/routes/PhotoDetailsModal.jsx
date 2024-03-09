import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ onClose, photoData, isFavorited, toggleFavorite, favoritedPhotos }) => {
  const { id, imageSource, profile, username, city, country, similarPhotos } = photoData;

  console.log(photoData);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton isFavorited={isFavorited} onToggleFavorite={() => toggleFavorite(id)} />
        <img className="photo-details-modal__image" src={imageSource} alt={`Image taken in ${city}, ${country}`} />
        <div className="photo-details-modal__header ">
          <div className='photo-details-modal__photographer-details'>
            <img className="photo-details-modal__photographer-profile " src={profile} alt={`Profile for ${username}`} />
            <div className="photo-details-modal__photographer-info">
              <span>{username}</span>
              <div className="photo-details-modal__photographer-location">
                {city}, {country}
              </div>
            </div>
          </div>
        </div>
        <p className='photo-details-modal__header'>Similar Photos</p>
      </div>
      <div className='photo-details-modal__top-bar'>
        <PhotoList photos={similarPhotos} toggleFavorite={toggleFavorite} favoritedPhotos={favoritedPhotos}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const [like, setLike] = useState('inactive');

  const handleClick = () => {
    setLike((prevState) => prevState === 'active' ? 'inactive' : 'active');
  };

  return (
    <div className={like === 'inactive' ? "photo-list__fav-icon" : ""} onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={like === 'active'} selected={like === 'active'}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;
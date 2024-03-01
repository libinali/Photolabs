import React from 'react';
import { useState } from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photoData, setPhotoData] = useState(photos);
  const [topicData, setTopicData] = useState(topics);
  
  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} />
    </div>
  );
};

export default App;

import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, topicId, getPhotosByTopic }) => {
  return (
    <div className="topic-list__item" onClick={() => getPhotosByTopic(topicId)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;

import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({ topics,  getPhotosByTopic }) => {

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) =>
        <TopicListItem
          key={topic.id}
          slug={topic.slug}
          title={topic.title}
          topicId={topic.id}
          getPhotosByTopic={getPhotosByTopic}
        />
      )}
    </div>
  );
};

export default TopicList;

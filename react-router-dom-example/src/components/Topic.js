import React from "react";
import { useParams } from "react-router";

const Topic = () => {
  let contents = [
    { id: 1, title: "HTML", description: "HTML is ..." },
    { id: 2, title: "JS", description: "JS is ..." },
    { id: 3, title: "React", description: "React is ..." },
  ];
  let params = useParams();
  let topic_id = params.topic_id;
  let selected_topic = {
    title: "Sorry",
    description: "Not Found",
  };
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  console.log("params", params, params.topic_id);
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
};

export default Topic;

import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Topic from "./Topic";

const Topics = () => {
  let contents = [
    { id: 1, title: "HTML", description: "HTML is ..." },
    { id: 2, title: "JS", description: "JS is ..." },
    { id: 3, title: "React", description: "React is ..." },
  ];
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
    </div>
  );
};

export default Topics;

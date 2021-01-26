import React from "react";
import "./Article.css";

const article = (props) => (
  <div className="article">
   <h1>{props.art.title}</h1> 
   <p>{props.art.body}</p>
  </div>
);

export default article;

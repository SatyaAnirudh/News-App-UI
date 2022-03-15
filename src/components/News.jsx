import React, { useContext } from "react";
import { store } from "../App";
import CardNews from "./CardNews";

function News() {
  console.log(useContext(store));
  const [sites,news] = useContext(store);

  console.log(news);

  return (
    <div>
      {news?.map((n) => (
        <CardNews key={n.newsId} news={n} />
      ))}
    </div>
  );
}

export default News;

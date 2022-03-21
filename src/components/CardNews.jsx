import React from "react";

function CardNews(props) {
  const { news } = props;
  //const { date } = {news.publishDate.split("T")};

  const getDate = (dateTime) => {
    const sp = dateTime.split("T");
    return sp[0];
  }

  const getCompleteNews = () => {
    
    window.open(news.newsLink, "_blank");
  };
  return (
    <div className="cardbg btn-outline-dark  m-3" styles="width: 18rem;">
      <div className="card-body">
        <h5 className="card-title">{news.newsTitle}({news.newsSite.siteTitle})</h5>
        <p className="card-text">{news.newsDescription}</p>
        <a onClick={getCompleteNews} className="btn bg-light  m-2 btn-sm">
          Get Complete News
        </a>
        <span>Date Published: {getDate(news.publishDate)}</span>
      </div>
    </div>
  );
}

export default CardNews;

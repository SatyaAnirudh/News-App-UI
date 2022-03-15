import React from "react";
import { useNavigate } from "react-router-dom";

function Cardproto(props) {
  const navigate = useNavigate();
  const { site, onGetAllNews, onLoadLatestNews } = props;

  const handleOnClick = () => {
    onLoadLatestNews(site);
    onGetAllNews(site.siteId);
    navigate("/news");
  }; //images(`./${site.siteTitle}.png`).default
  //onError={(e)=>{e.target.onerror = null; e.target.src="../images/latest_news.png"}} />
  ////require(images[site.siteTitle]

  const importAll = (require) =>
    //console.log(require)
    require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next);
      return acc;
    }, {});

  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );
  //console.log(require)

  return (
    <div className="col-sm-2 m-3">
      <div className="card text-white bg-dark" styles="width: 18rem">
        <img
          className="card-img-top"
          src={images[site.siteTitle + ".png"]}
          alt={images["lastest.jpg"]}
          width="270"
          height="160"
        />
        <div className="card-body">
          <h5 className="card-title">{site.siteTitle}</h5>
          <p className="card-text">{site.siteAddress}</p>
          <button
            onClick={handleOnClick}
            className="btn btn-primary m-2 btn-sm"
          >
            Get News
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cardproto;

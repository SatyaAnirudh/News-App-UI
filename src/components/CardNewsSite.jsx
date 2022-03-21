import React from "react";
import { useNavigate } from "react-router-dom";

function Cardproto(props) {
  const navigate = useNavigate();
  const { site, onGetAllNewsForNewsSite } = props;

  const handleOnClick = () => {
    onGetAllNewsForNewsSite(site);
    navigate("/news");
  }; 

  const importAll = (require) =>

    require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next);
      return acc;
    }, {});

  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

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

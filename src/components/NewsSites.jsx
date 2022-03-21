import React, { useContext, useEffect, useState } from "react";
import { BackTop } from "antd";
import "antd/dist/antd.css";
import { store } from "../App";
import CardNewsSite from "./CardNewsSite";
import DropDown from "./DropDown";

function NewsSite(props) {
  const { sitesObj, selectedSitesObj, onGetAllNewsForNewsSite } =
    useContext(store);
  const [sites] = sitesObj;
  const [selectedSites, setselectedSites] = selectedSitesObj;
  const [getAllNewsForNewsSite] = onGetAllNewsForNewsSite;
  const prevSelectedSites = selectedSites;

  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#1088e9",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };

  const handleChange = (e) => {
    const dummy = sites.filter((item) => item.siteTitle === e.target.value);
    setselectedSites([...selectedSites, dummy[0]]);
    if (selectedSites.size != prevSelectedSites) {
    }
  };

  //console.log(selectedSites, "fsdfs");
  return (
    <div className="row">
      <DropDown handleChange={handleChange} />
      {[...sites].map((site) => (
        <CardNewsSite
          key={site.siteId}
          site={site}
          onGetAllNewsForNewsSite={getAllNewsForNewsSite}
        />
      ))}
      <BackTop visibilityHeight={250} duration={200}>
        <div style={style}>UP</div>
      </BackTop>
    </div>
  );
}

export default NewsSite;

import React, { useContext, useEffect, useState } from "react";
import { store } from "../App";
import CardNewsSite from "./CardNewsSite";
import DropDown from "./DropDown";

function NewsSite(props) {
  const { onLoadLatestNews, onGetAllNews } = props;
  //console.log(useContext(store));
  //const [sites] = useContext(store);

  const [sites, news, selectedSites, setselectedSites] = useContext(store);
  console.log(selectedSites);
  //const [activeSite, setactiveSite] = useState("");
  const prevSelectedSites = selectedSites;

  const handleChange = (e) => {
    //setactiveSite(e.target.value);
    //console.log("change", activeSite);
    // updateSelectedSites(e.target.value)
    console.log(sites, "fsdjfs", selectedSites);
    const dummy = sites.filter((item) => item.siteTitle === e.target.value);
    console.log("dummy", dummy);
    setselectedSites([...selectedSites, dummy[0]]);
    if (selectedSites.size != prevSelectedSites) {
    }
  };

  console.log(selectedSites, "fsdfs");
  return (
    <div className="row">
      <DropDown handleChange={handleChange} />
      {[...selectedSites].map((site) => (
        <CardNewsSite
          key={site.siteId}
          site={site}
          onGetAllNews={onGetAllNews}
          onLoadLatestNews={onLoadLatestNews}
        />
      ))}
    </div>
  );
}

export default NewsSite;

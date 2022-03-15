import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewsSites from "./components/NewsSites";
import News from "./components/News";
import axios from "axios";
import bg from "./images/bg_img.jpg";

const LOAD_NEWS_REST_API_URL = "http://localhost:8080/postRssUrl";
const NEWS_SITES_REST_API_URL = "http://localhost:8080/getAllNewsSites";
const GET_NEWS_REST_API_URL = "http://localhost:8080/getAllNews";

export const store = createContext();

function App() {
  const [sites, setsites] = useState([]);
  const [news, setnews] = useState([]);
  const [selectedSites, setselectedSites] = useState(new Set());

  useEffect(() => {
    getAllNewsSites();
    console.log("mount");
  }, []);

  const getAllNewsSites = () => {
    console.log("in news sites");
    axios
      .get(NEWS_SITES_REST_API_URL)
      .then((response) => {
        console.log("response ", response);
        if (response.status === 200) {
          setsites(response.data);
          console.log(sites);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadLatestNews = (newsSite) => {
    console.log("in loading news");
    console.log(newsSite);
    axios
      .post(LOAD_NEWS_REST_API_URL, { ...newsSite })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllNews = (siteId) => {
    console.log("in getting news ", siteId);
    axios
      .get(GET_NEWS_REST_API_URL + "/" + siteId)
      .then((response) => {
        console.log("response ", response);
        if (response.status === 200) {
          setnews(response.data);
          console.log(news);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <store.Provider value={[sites, news, selectedSites, setselectedSites]}>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vw",
        }}
      >
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <NewsSites
                  // sites={this.state.newsSites}
                  onGetAllNews={getAllNews}
                  onLoadLatestNews={loadLatestNews}
                />
              }
            />
            <Route path="news" element={<News />} />
          </Routes>
        </Router>
      </div>
    </store.Provider>
  );
}

export default App;

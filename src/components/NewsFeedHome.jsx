import React, { useContext, useState, useEffect } from "react";
import { Pagination, BackTop, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import CardNews from "./CardNews";
import { store } from "../App";

function NewsFeedHome() {
  const { allNewsObj } = useContext(store);
  const [allNews, setallNews] = allNewsObj;
  const [pageSize, setpageSize] = useState(10);
  const [minValue, setminValue] = useState(0);
  const [maxValue, setmaxValue] = useState(9);
  const [pageNumber, setpageNumber] = useState(0);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [pageNumber]);

  const handlePageChange = (pageNumber, newPageSize) => {
    console.log(pageNumber, newPageSize);
    setpageSize(newPageSize);
    setpageNumber(pageNumber);
    setminValue((pageNumber - 1) * pageSize);
    setmaxValue(pageNumber * pageSize);
  };

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

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div>
      {!allNews && <Spin indicator={antIcon} />}
      {allNews &&
        allNews.length > 0 &&
        allNews
          .slice(minValue, maxValue)
          .map((n) => <CardNews key={n.newsId} news={n} />)}
      <Pagination
        defaultCurrent={1}
        defaultPageSize={9}
        onChange={handlePageChange}
        total={allNews.length}
      />
      <BackTop visibilityHeight={250} duration={200}>
        <div style={style}>UP</div>
      </BackTop>
    </div>
  );
}

export default NewsFeedHome;

// import React from "react";
import Add from "../Components/Add";
import Allvideos from "../Components/Allvideos";

import { Link } from "react-router-dom";
import Allcategories from "./Allcategories";
import { useState } from "react";

const Home = () => {
  const [videoResponse, setVideoResponse] = useState("");
  const [videoDeletedResponse, setvideoDeletedResponse] = useState("");
  const [categoryVideoDeletedResponse, setCategoryVideoDeletedResponse] =useState("");

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Add setvideoResp={setVideoResponse} />
          </div>
          <div>
            <Link to={"/History"} style={{ textDecoration: "none" }}>
              Watch History
            </Link>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-6">
            <Allvideos
              videoResp={videoResponse}
              videoDeletedResponse={videoDeletedResponse}
              setCategoryVideoDeletedResponse={setCategoryVideoDeletedResponse}
            />
          </div>
          <div className="col-6">
            <Allcategories setvideoDeletedResponse={setvideoDeletedResponse} 
            categoryVideoDeletedResponse ={categoryVideoDeletedResponse} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

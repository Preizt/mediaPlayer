// import React from "react";
import Add from "../Components/Add";
import Allvideos from "../Components/Allvideos";

import { Link } from "react-router-dom";
import Allcategories from "./Allcategories";

const Home = () => {
  return (
    <div className="">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Add />
          </div>
          <div>
            <Link to={"/History"} style={{ textDecoration: "none" }} >Watch History</Link>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-6">
            <Allvideos />
          </div>
          <div className="col-6">
            < Allcategories/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

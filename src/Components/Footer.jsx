import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="p-2 text-black">
        <div className="container" >
      <div className="row mt-5">
        <div className="col-5">
          <i className="fa-solid fa-music fa-bounce fa-xl mb-3 me-3"></i>
          Media Player
          <p>
            Designed and built with all the love in the world by the Luminar
            team with the help of our contributors
          </p>
          <p>Code licensed Luminar,docs CC by 3.0</p>
          <p>Currently v5.3.2.0</p>
        </div>
        <div className="col-2">
          <h5 className="text-black">Links</h5>
          <Link to={"./"} style={{ textDecoration: "none" }}>
            <h6>Landing Page</h6>
          </Link>
          <Link to={"./home"} style={{ textDecoration: "none" }}>
            <h6>Home</h6>
          </Link>
          <Link to={"./history"} style={{ textDecoration: "none" }}>
            <h6>History</h6>
          </Link>
        </div>
        <div className="col-2">
          <h5 className="text-black">Guides</h5>
          <Link to={"https://react.dev/"} style={{ textDecoration: "none" }}>
            <h6>React</h6>
          </Link>
          <Link to={"https://reactrouter.com/"} style={{ textDecoration: "none" }}>
            <h6>React Router</h6>
          </Link>
          <Link to={"https://react-bootstrap.netlify.app/"} style={{ textDecoration: "none" }}>
            <h6>React Bootstrap</h6>
          </Link>
        </div>
        <div className="col-3">
              <h5 className="text-black">Contact</h5>
              <input type="text" placeholder="Enter your Email here" className="p-2 rounded "/>
              <button className="btn btn-danger m-2"><i className="fa-solid fa-arrow-right"></i></button>
              <br />
              <i className="fa-brands fa-twitter m-3"></i>
              <i className="fa-brands fa-instagram m-3"></i>
              <i className="fa-brands fa-facebook m-3"></i>
              <i className="fa-brands fa-linkedin-in m-3"></i>
              <i className="fa-brands fa-github m-3"></i>
              <i className="fa-solid fa-phone m-3"></i>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Footer;

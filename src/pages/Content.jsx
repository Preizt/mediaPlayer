import mainimg from "../assets/giphy.gif";
import Card from "react-bootstrap/Card";
import fone from "../assets/image1.jpg";
import ftwo from "../assets/image2.jpg";
import fthree from "../assets/image3.jpg";
import { Link } from "react-router-dom";


const Content = () => {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 ">
            <h1>
              Welcome to{" "}
              <span className="text-primary">
                {" "}
                <br />
                Media Player
              </span>
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
              hic distinctio qui nostrum accusantium voluptas beatae corporis,
              dolor quas, in similique aperiam aliquam. Ipsam earum dolorem
              aliquam excepturi suscipit quasi!
            </p>

            {/* <button type="button" ">
              Get Started{" "}
            </button> */}
          <Link to={"/home"} className="btn btn-primary">
           Get Started
          </Link>

          </div>
          <div className="col-1"></div>
          <div className="col-5 ">
            <img src={mainimg} alt="" />
          </div>
        </div>
      </div>

      <div className="container" id="features">
        <h3 className="text-center m-5">Features</h3>

        <div className="row">
          <div className="col-4">
            <Card style={{ width: "18rem" }} id="cards">
              <Card.Img variant="top" src={fone} style={{ height: "20rem" }} />
              <Card.Body style={{ height: "10rem" }}>
                <Card.Title>Managing  Videos</Card.Title>
                <Card.Text>
                  Users can upload , view and remove the videos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: "18rem" }} id="cards">
              <Card.Img variant="top" src={ftwo} style={{ height: "22rem" }} />
              <Card.Body style={{ height: "8rem" }}>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>Categorise Videos</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: "18rem" }} id="cards">
              <Card.Img
                variant="top"
                src={fthree}
                style={{ height: "20rem" }}
              />
              <Card.Body style={{ height: "10rem" }}>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="row mt-5 border p-5 rounded-5 mb-5">
            <div className="col-6">
              <h4 className="text-primary">Simple ,Fast & Powerful</h4>
              <p> 
                <h6>Play Everything</h6>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio fuga sint molestiae perspiciatis similique.
              </p>
              <p> 
                <h6>Categorise Videos</h6>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio fuga sint molestiae perspiciatis similiqu.
              </p>
              <p> 
                <h6>Manage History</h6>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio fuga sint molestiae perspiciatis similique.
              </p>
              
            </div>
            <div className="col-6 ">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/n_TZzsAvSQI?si=yySkCPAhzW83Tmke"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

  ); 
};

export default Content;

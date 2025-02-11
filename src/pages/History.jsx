import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";


const History = () => {
  return (
    <>
      <div className="container d-flex justify-content-between">
        <div>
        <h2 className="p-3">Watch History</h2>
        </div>
        <div className="mt-4">
          <Link to={"/Home"}  style={{ textDecoration: "none"}} >
          Back to Home</Link>
        </div>
        
      </div>
      <div className="container text-center" >
        <Table striped rounded hover>  
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Link</th>
              <th>Time Stamp</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><i className="fa-solid fa-trash text-danger"></i></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default History;

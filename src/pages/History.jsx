import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { deleteHistory, getAllHistory } from "../services/allAPI";


const History = () => {

  const [historyData , setHistoryData] = useState([]);

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory = async ()=>{
    try {
      let apiresponse = await getAllHistory();
      setHistoryData(apiresponse.data)
    } catch (error) {
      console.log(error);
      
    }
  };

  const onDeleteClick = async(id)=>{
    try {
      await deleteHistory(id)
      getHistory()
      
      
    } catch (error) {
      console.error(error)
    }
  }




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
              <th>Index</th>
              <th>Caption</th>
              <th>Link</th>
              <th>Time Stamp</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>

          {
            
            historyData.length>0? historyData.map((value,index)=>(
              
              <tr key={index}>
              <td>{index+1}</td>
              <td>{value.caption}</td>
              <td>
                <Link to={`https://www.youtube.com/watch?v=${value.videoLink}`}>https://www.youtube.com/watch?v=${value.videoLink}
                </Link>
                </td>
              <td></td>
              <td>
              <button className="btn" onClick={()=>onDeleteClick(value.id)}>
              <i className="fa-solid fa-trash text-danger"></i>
              </button>
              </td>
            </tr>

            )):

            <div className="p-5">
              No history found 
            </div>
            
          

}
          </tbody>
        
        </Table>
      </div>
    </>
  );
};

export default History;

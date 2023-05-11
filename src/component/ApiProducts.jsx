import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ApiProducts = () => {
  const [data, setData] = useState([]);

    
  const url = "https://fakestoreapi.com/products";

  const fechInfo = () => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((datas) => setData(datas))
      .catch((error) => console.error('Error fetching data:', error));
  };
  

  useEffect(() => {
    fechInfo();
  },[]);


  // const fetch =async(e)=>{
  //     // e.preventDefault();
  //     const data =await fetch(url)
  //     const response = await data.json();
  //     console.log(response);

  // }
  console.log(data);

  return (
    <div className="container card" style={{ display:"flex" }}>
      {data.map((dataObj, index) => {
        return (
          <>
            <div className=" card-item">
              <div style={{ width:"80%" }}>
                <img src={dataObj.image} alt="mern" width={400} height={300} className="product-image" />
              </div>
              <p> {dataObj.title}</p>
              <p>${dataObj.price}</p>
              <p>{dataObj.size}</p>
              <Link to={`/data/${dataObj.id}`} ><button className="add-btn">Summary</button></Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ApiProducts;

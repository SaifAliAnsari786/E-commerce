import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const NewRout = () => {
  const params = useParams();
//   const id = params.id;
  const [data, setData] = useState();

  const url = `https://fakestoreapi.com/products/${params.id}`;

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
  });
//   console.log(data);

  return (
    <>
    <Navbar/>
      <div className="container " style={{ display: "flex" }}>
          <div className="lef-column">
            <img src={`${data?.image}`} alt="mern" className="p-image"/>
          </div>
          <div className="right-column">
          <div className="product-description">
            <span>{data?.description}</span>
          </div>
          <p> {data?.title}</p>
          <p>${data?.price} </p>
          <p>{data?.size}</p>
          </div>
        </div>
    </>
  );
};

export default NewRout;

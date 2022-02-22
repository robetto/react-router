import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const PhotoDetail = () => {
  const { id } = useParams();

  const [photo, setPhoto] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(res => res.json())
      .then(res => setPhoto(res)) 
  }, [id]);   


  return (
    <div>
      PhotoDetail {id}  
      {console.log(photo)}
      {photo?.title}
    </div>
  );
};

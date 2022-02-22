import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Catalog = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPhotos(json.filter((p) => p.id < 11)));
  }, []);

  const navigate = useNavigate()

  return (
    <div>
      <h1>Catalog</h1>
      {photos.map((photo) => {
        return (
          <Link key={photo.id} to={`${photo.id}`}>
        <img src={photo.thumbnailUrl} alt={photo.title} height={20} />
          </Link>
        )
      })}

      {/* <div>
      <h1>Catalog 2 modo di linkare</h1>
      {photos.map((photo) => {
        return (          
        <img key={photo.key} src={photo.thumbnailUrl} alt={photo.title} height={20} onClick={() => navigate(`${photo.id}`)} />
        )
      })}
    </div> */}

    </div>
  );
};

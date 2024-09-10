import { useState, useEffect } from "react";
import Photo from "./Photo";
import Fetch from "./fetch";
import { AlbumId } from "../App";
const Photos = (props) => {
  const [photos, setPhotos] = useState([]);
  const [counter, setCounter] = useState(0);
  const url = "https://jsonplaceholder.typicode.com/photos?albumId=1";
  const url2 = `https://jsonplaceholder.typicode.com/photos?albumId=${AlbumId[0]}`;
  useEffect(() => {
    Fetch(url2, setPhotos);
  }, []);

  return (
    <div>
      <h2>Photos:</h2>
      {getChunk(photos, counter)?.map((item, i) => (
        <Photo photo={item} key={i} />
      ))}
      <button
        disabled={counter <= 0}
        onClick={() => setCounter((counter) => counter - chunkSize)}
      >
        Back
      </button>
      <button
        disabled={counter >= photos.length - chunkSize}
        onClick={() => setCounter((counter) => counter + chunkSize)}
      >
        Forward
      </button>
    </div>
  );
};
const chunkSize = 3;
function getChunk(photos, counter) {
  console.log(counter);
  const chunk = photos.slice(counter, counter + chunkSize);
  return chunk;
}

export default Photos;

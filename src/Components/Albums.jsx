import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Fetch from "./fetch";
import Album from "./Album";
import { AlbumId } from "../App";
let prevLen = 0;

const Albums = (props) => {
  const [albums, setAlbums] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/albums?userId=1";

  useEffect(() => {
    Fetch(url, setAlbums);
  }, []);
  const [miniAlbums, setMiniAlbums] = useState([]);
  useEffect(() => {
    setMiniAlbums(albums);
  }, [albums]);

  let search = useRef(0);
  return (
    <div>
      <div>
        <input
          onChange={() => {
            if (search.current.value.length < prevLen) {
              setMiniAlbums(() => [...albums]);
            }
            prevLen = search.current.value.length;
            searchMe(setMiniAlbums, search.current.value);
          }}
          type="text"
          placeholder="input search value / id"
          ref={search}
        />
      </div>
      <h1>Albums:</h1>

      {miniAlbums.map((item, i) => (
        // TODO: the ?albumId=${item.id} is not work.
        <Link className="link" to={`/photos?albumId=${item.id}`}> 
          <Album album={item} key={i} onClick={() => {AlbumId[1](item.id)}}/>
        </Link>
      ))}
    </div>
  );
};

function searchMe(setMiniTodos, value) {
  setMiniTodos((prev) =>
    [...prev]?.filter(
      (item) => item.title?.includes(value) || `${item.id}`.includes(value)
    )
  );
}

export default Albums;

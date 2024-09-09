import { json } from "react-router-dom";

async function Fetch(url, setState) {
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setState(json);
    });
}

export default Fetch;

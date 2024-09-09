async function Fetch (url, setUser) {
    console.log(10, "here");
    let userName = fetch(url)
    .then(res => res.json())
    .then(json => setUser(json));
};

export default Fetch;
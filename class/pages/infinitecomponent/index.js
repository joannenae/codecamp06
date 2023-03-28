import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useEffect, useState } from "react";

let page = 1;
const fetchData = (items, setItems) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
    .then((res) => {
      console.log(res);
      setItems([...items, ...res.data]);
      page = page + 1;
      console.log("page", page);
    });
};

export default function App() {
  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    page = 1;
    fetchData(items, setItems);
  }, []);
  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={() => {
        fetchData(items, setItems);
      }}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div style={{ minHeight: "100vh" }}>
        {items.map((user) => (
          <img src={user.url} height="100px" width="200px" />
        ))}
      </div>
    </InfiniteScroll>
  );
}

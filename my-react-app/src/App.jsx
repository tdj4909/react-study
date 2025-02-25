import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./CounterSlice";

function App(){
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
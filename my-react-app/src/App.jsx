import { useEffect, useState } from "react";
import axios from "axios";

function App(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => console.error("API 호출 오류:", error));
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h1>API에서 받은 데이터</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
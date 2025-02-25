import { useQuery } from "@tanstack/react-query";

function PostList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        },
    });

    console.log(data);
    
    if (isLoading) return <p>로딩 중...</p>;

    if (error instanceof Error) return <p>오류 발생: {error.message}</p>;

    

    return (
        <ul>
            {data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;
export default async function fetchData() {
const api = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await api.json();
console.log(posts);
return(
    <>
    <h1>Posts</h1>
    {
        posts.map((post: any) => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
        ))
    }
    </>
)
}
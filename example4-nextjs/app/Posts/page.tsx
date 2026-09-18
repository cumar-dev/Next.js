import React from 'react'
async function getPost() {
  const api = await fetch("https://jsonplaceholder.typicode.com/todos", {
        cache: "force-cache"
    })
    if(!api.ok) {
        console.error("api is missing")
        return
    }
    const todos = api.json();
    console.log("todos", todos);
    return todos;
}
const Posts = async () => {
  const todos = await getPost();
  return (
    <div>
       {todos.map((todo: any) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.completed}</p>
        </div>
       ))}
    </div>
  )
}

export default Posts;
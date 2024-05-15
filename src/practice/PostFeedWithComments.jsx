import React,{useState,useEffect} from "react";

/*
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/posts/1/comments
*/

export default function App() {
  const [posts ,setPosts] =useState([]);
  const [comments,setComments]=useState({});
  const [expandedPost,setExpanded] =useState(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[]);

  const fetchComments = React.useCallback((postId)=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res => res.json())
    .then(data => setComments(prev => ({
      ...prev,
      [postId]:data
    })));
  },[]);

  const handlePostClick =React.useCallback((postId)=>{
    if(expandedPost === postId){
      setExpanded(null);
    }
    else{
      setExpanded(postId);
      if(!comments[postId]){
        fetchComments(postId);
      }
    }
  },[expandedPost,comments,fetchComments])

  
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{border:'1px solid black' ,padding:'10px',margin:'10px'}}>
          <h2 onClick={()=> handlePostClick(post.id)}>{post.title}</h2>
          <p>{post.body}</p>
          {expandedPost === post.id && comments[post.id] && (
            <div>
              <h3>Comments: </h3>
              <ul>
              {comments[post.id].map(comment => (
                <li key={comment.id}>
                  <p>{comment.body}</p>
                </li>
              ))
                
                
              }</ul>
            </div>
          )}
          
        </div>
      ))}
    </div>
  );
}

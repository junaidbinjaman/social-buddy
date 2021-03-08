import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "../Comments/Comments";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      <h1>This is Post Detail Of {id}</h1>
      <p>User posted: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Post Body: {post.body}</p>
      <h1>
        From here the website is now showing you all the commnets of Post: {id}
      </h1>
      <p>Number Of Comments {comments.length}</p>
      {comments.map((comment) => (
        <Comments comment={comment}></Comments>
      ))}
    </div>
  );
};

export default PostDetail;

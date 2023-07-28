import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BASE_URL } from '.';
import { COHORT_NAME } from '.';

const EditPost = ({posts, setPosts, postId, setPostId}) => {
const [title, setTitle] = useState([]);
const [price, setPrice] = useState('');
const [description, setDescription] = useState('');
const [author, setAuthor] = useState('')

    const handleSubmit = async (event) => {
      event.preventDefault();
      setPostId(author._id)
      console.log('postId:', postId);
      try {
        // You will need to insert a variable into the fetch template literal
        // in order to make the POST_ID dynamic.
        // 5e8d1bd48829fb0017d2233b is just for demonstration.
        const response = await fetch(
          `${BASE_URL}/${COHORT_NAME}/posts/${postId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
            body: JSON.stringify({
              post: {
                title: title,
                description: description,
                price: price,
                location: location,
                willDeliver: true,
              },
            }),
          }
        );
        console.log("handleSubmit function called!")

        const result = await response.json();
        console.log('data: ', data);
        console.log(result);
        return result;
      } catch (err) {
        console.error(err);
        if(data && data.title) {
          const newPosts = posts.map(post => {
            if (post.id === postId) {
              return data;
            }else {
              return post;
            }
            
          });
          setPosts(newPosts);
          setTitle('');
          setDescription('');
          setPostId(null);
        }
}};

return (
  <>
    <h3 className="text-3xl pl-5">Update a Post</h3>
    <form onSubmit={handleSubmit}>
      <input
        className="flex-col pl-2 mx-1 m-1 border-2 rounded border-gray-600"
        type="text"
        placeholder="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        className="flex-col pl-2 mx-1 m-1 border-2 rounded border-gray-600"
        type="text"
        placeholder="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <input
        className="flex-col pl-2 mx-1 m-1 border-2 rounded border-gray-600"
        type="text"
        placeholder="$$$"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      ></input>
      <input
        className="flex-col pl-2 mx-1 m-1 border-2 rounded border-gray-600"
        type="text"
        placeholder="author"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      ></input>
      <button type="submit" className="btn-btn-outline-primary">
        Submit
      </button>
    </form>
  </>
);
};

export default EditPost;

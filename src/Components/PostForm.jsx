import React from "react";
import { useState } from "react";

const COHORT_NAME = "2303-FTB-MT-WEB-PT";
const BASE_URL = "https://strangers-things.herokuapp.com/api";

const PostForm = ({}) => {
  const [post, setPost] = useState({
    id: "",
    title: "",
    description: "",
    author: "",
    price: "",
  });
  const makePost = async (title, description, price, willDeliver) => {
    try {
      const response = await fetch(`${BASE_URL}/${COHORT_NAME}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            willDeliver: true,
          },
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdatePosts = async (event) => {
    event.preventDefault();
    await updatePost(post.title, post.description, post.price, true);
    setPost({
      id: "",
      title: "",
      description: "",
      author: "",
      price: "",
    });
  };

  const handlePostChange = (event) => {
    setPost(() => ({
      ...post,
      [event.target.id]: event.target.value,
    }));
    console.log(post.title);
  };
  const handlePostSubmit = async (event) => {
    event.preventDefault();
    await makePost(post.title, post.description, post.price, true);
    setPost({
      id: "",
      title: "",
      description: "",
      author: "",
      price: "",
    });
  };

  return (
    <>
      <form
        className=" flex-col pl-4 m-1 border-2 rounded"
        onSubmit={(event) => {
          handlePostSubmit();
          event.preventDefault();
          setPost("");
          console.log("form submitted!");
        }}
      ></form>
      <label className="pl-2" htmlFor="posts">
        Post Title
      </label>
      <input
        className="flex-col pl-2 mx-1 m-1 border-2 rounded border-gray-600"
        type="text"
        placeholder="Enter Title"
        value={post.title}
        onChange={handlePostChange}
        id="title"
      />
      <label className="pl-2" htmlFor="posts">
        Post Description
      </label>
      <input
        className="m-1 border-2 rounded border-gray-600"
        type="text"
        placeholder="Enter Description"
        value={post.description}
        onChange={handlePostChange}
        id="description"
      />

      <label className="pl-2" htmlFor="posts">
        Post Author
      </label>
      <input
        className="m-1 border-2 rounded border-gray-600"
        type="text"
        placeholder="Enter Author"
        id="author"
        onChange={handlePostChange}
        value={post.author}
      />
      <label className="pl-2" htmlFor="posts">
        Price
      </label>
      <input
        className="m-1 border-2 rounded border-gray-600"
        type="text"
        placeholder="$$$"
        id="price"
        onChange={handlePostChange}
        value={post.price}
      />
      <button
        type="submit"
        onClick={handlePostSubmit}
        className="btn btn-outline-primary m-2 text-xl font-normal text-gray-700 mb-8 border-2 rounded border-gray-600"
      >
        Submit
      </button>
    </>
  );
};

export default PostForm;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://bookstore-41.onrender.com/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. please check console");
        console.log(error);
      });
  };
  return (
    <div className="">
      <BackButton />
      <h1 className="">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="">
        <h3 className="">Are You Sure You want to delete this book?</h3>
        <button
          className=""
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};
export default DeleteBook;
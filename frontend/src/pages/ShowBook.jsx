/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-41.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="">
      <BackButton />
      <h1 className="">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="">
          <div className="">
            <span className="">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="">
            <span className="">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="">
            <span className="">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="">
            <span className="">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="">
            <span className="">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="">
            <span className="">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShowBook;
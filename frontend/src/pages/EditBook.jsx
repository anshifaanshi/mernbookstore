/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-41.onrender.com/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. please check console");
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`https://bookstore-41.onrender.com/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happend , please check console");
        console.log(error);
      });
  };
  return (
    <div className="">
      <BackButton />
      <h1 className="">Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="">
        <div className="my-4">
          <label className="">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=""
          />
        </div>

        <div className="">
          <label className="">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className=""
          />
        </div>
        <div className="my-4">
          <label className="">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className=""
          />
        </div>
        <button className="" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};
export default EditBook;
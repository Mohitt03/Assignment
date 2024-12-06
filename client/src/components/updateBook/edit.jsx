import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

const Edit = () => {

  const initialBook = {
    title: "",
    author: "",
    genre: "",
    publication_year: "",
    isbn: ""
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(initialBook);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, book)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" })
        navigate("/");
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='editBook'>
      <Link to={"/"}>Back</Link>
      <h3>Update Book</h3>
      <form className='editBookForm' onSubmit={submitForm} >
        <div className="inputGroup">
          <label htmlFor="title">Book Title</label>
          <input
            type="text"
            value={book.title}
            onChange={inputChangeHandler}
            id="title"
            name="title"
            autoComplete='off'
            placeholder='Book Title'
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            value={book.author}
            onChange={inputChangeHandler}
            id="author"
            name="author"
            autoComplete='off'
            placeholder='Author'
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            value={book.genre}
            onChange={inputChangeHandler}
            id="genre"
            name="genre"
            autoComplete='off'
            placeholder='Genre'
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="publication_year">Publication Year</label>
          <input
            type="number"
            value={book.publication_year}
            onChange={inputChangeHandler}
            id="publication_year"
            name="publication_year"
            autoComplete='off'
            placeholder='Publication Year'
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="isbn">ISBN</label>
          <input
            type="number"
            value={book.isbn}
            onChange={inputChangeHandler}
            id="isbn"
            name="isbn"
            autoComplete='off'
            placeholder='ISBN'
          />
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;

import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import "../addBook/Add.css";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';

const Book = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getAll");
      setBooks(response.data);
    }

    fetchData();

  }, []);

  const deleteBook = async (bookId) => {
    await axios.delete(`http://localhost:8000/api/delete/${bookId}`)
      .then((response) => {
        setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
        toast.success(response.data.msg, { position: 'top-right' })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='bookTable'>
      <Link to={"/add"} className='addButton'>Add Book</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Book Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>publication_year</th>
            <th>isbn</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book, index) => {
              return (
                <tr key={book._id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.publication_year}</td>
                  <td>{book.isbn}</td>
                  <td className='actionButtons'>
                    <button onClick={() => deleteBook(book._id)}><i className="fa-solid fa-trash">Delete</i></button>
                    <Link to={`/edit/${book._id}`}><i className="fa-solid fa-pen-to-square">Edit</i></Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Book;

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import "../addBook/Add.css";
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';


const Home = () => {

    
  const [books, setBooks] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getAll");
      setBooks(response.data);
    }

    fetchData();

  }, []);

    return (
        <div className='bookTable'>
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















export default Home;
import React,{useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Link,useNavigate} from 'react-router-dom';
import './Add.css';




const Add = () => {
    const books= {
        title: "",
        author: "",
        genre: "",
        publication_year: "",
        isbn: ""
    };

    const [book, setBook] = useState(books);
    const navigate=useNavigate();
    const inputHandler =(e)=>{
        const{name,value}=e.target
        setBook({...book,[name]:value});
    }
    const submitForm =async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create",book)
        .then((res)=>{
            toast.success(res.data.msg,{position:"top-right"});
            navigate("/");
        })
        .catch(error=>console.error(error))
        
    }

    return (
        <div>
            <Link to="/">Back</Link>
            <h1>Add new book</h1>
            
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor='title'>Book Title: </label>
                    <input
                        type="text"
                        onChange={inputHandler}
                        id="title"
                        name="title"
                        placeholder="title"
                    />
                </div>
                <div>
                    <label htmlFor='author'>Book Author: </label>
                    <input
                        type="text"
                        onChange={inputHandler}
                        id="author"
                        name="author"
                        placeholder="author"
                    />
                </div>
                <div>
                    <label htmlFor='genre'>Book Genre: </label>
                    <input
                        type="text"
                        onChange={inputHandler}
                        id="genre"
                        name="genre"
                        placeholder="genre"
                    />
                </div>
                <div>
                    <label htmlFor='publication_year'>Book Publication Year: </label>
                    <input
                        type="number"
                        onChange={inputHandler}
                        id="publication_year"
                        name="publication_year"
                        placeholder="publication_year"
                    />
                </div>
                <div>
                    <label htmlFor='isbn'>Book ISBN: </label>
                    <input
                        type="number"
                        onChange={inputHandler}
                        id="isbn"
                        name="isbn"
                        placeholder="isbn"
                    />
                </div>
                <div>
                    <button type="submit">Add Books</button>
                </div>
            </form>
        </div>
    );
};

export default Add;
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Allbooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/api/viewbooks").then((response) => {
            console.log(response.data);
            setBooks(response.data);
        }).catch((error) => {
            console.error("Error fetching books:", error);
        });
    }, []);

    return (
        <div>
            <h1>All Books</h1>
            <table>
                <tr>
                    <td>book_name</td>
                    <td>author</td>
                    <td>price</td>
                </tr>
                {books.map((book) => (
                    <tr key={book._id}>
                        <td>{book.book_name}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Allbooks

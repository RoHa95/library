import React from 'react';
import {books} from "../constants/mockData.js";
import BookCard from './BookCard.jsx';

function Books() {
    console.log(books);
    return (
        <div>
            <div>
                {books.map(book => (
                    <BookCard key= {book.id} data={book}> </BookCard>
                ))}
            </div>
            <div></div>
        </div>
    );
}

export default Books;
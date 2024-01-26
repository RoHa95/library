import React, { useState } from 'react';
import {books as bookData} from "../constants/mockData.js";
import BookCard from './BookCard.jsx';
import SideCard from './SideCard.jsx';
import SearchBox from './SearchBox.jsx';

import styles from "./books.module.scss";

function Books() {
    const [books, setBooks] = useState(bookData);
    const [liked, setLiked] = useState([]);
    const [search, setSearch] = useState([]);

    const likedListHandler = (book, status) =>{
        if(status){
            const newLikedList = liked.filter(i=> i.id !== book.id);
            setLiked(newLikedList);
        }else{
            setLiked(liked=>[...liked, book]);
        }
    }
    const searchHandler = ()=>{
        if(search){
            const newBooks = bookData.filter(book=> 
                book.title.toLowerCase().includes(search));
                setBooks(newBooks);
        }else{
            setBooks(bookData);
        }
    }
    console.log(books);
    return (
        <>
        <SearchBox search= {search} setSearch = {setSearch} searchHandler={searchHandler} />
        <div className={styles.container}>
            <div className={styles.cards}>
                {books.map(book => (
                    <BookCard 
                    key= {book.id} 
                    data={book}
                    likedListHandler = {likedListHandler}> </BookCard>
                    ))}
            </div>
            {!!liked.length && <div className={styles.favorite}>
                <h4>Favorites</h4>
                {liked.map(book=><SideCard key={book.id} data={book}/>)}</div>}
        </div>
                    </>
    );
}

export default Books;
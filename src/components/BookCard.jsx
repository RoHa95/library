import React, { useState } from 'react';
import { IoMdHeart } from "react-icons/io";

import styles from "./bookCard.module.scss";
function BookCard({data:{title, author,image, language, pages }}) {

    const [like, setLike] = useState();
    const likeHandler = ()=>{
        setLike( like => !like);
    }
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span>{pages} pages</span>
                </div>
            </div>
            <button onClick={likeHandler}><IoMdHeart color={like? "red" : "#e0e0e0"} fontSize="1.8rem"/></button>
        </div> 
    );
}

export default BookCard;
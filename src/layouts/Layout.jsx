import React from 'react';
import styles from "./layout.module.scss";
function Layout({children}) {
    return (
       <>
        <header>
            <h1>Book App</h1>
            <p><a href="#">RohaStore</a> |your dreamy books </p>
        </header>
        {children}
        <footer><p>Developed with Love</p></footer>
       </>
    );
}

export default Layout;
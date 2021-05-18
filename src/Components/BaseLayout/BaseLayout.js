import React from 'react';
import styles from './BaseLayout.module.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const BaseLayout = (props) => {
    return (
        <div className={styles.BaseLayout}>
            <header><Header/></header>
            <main style={{minHeight : '550px'}}>
                {props.children}
            </main>
            <footer><Footer/></footer>
        </div>
    );
};

export default BaseLayout;
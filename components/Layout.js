import React from 'react'
import styles from '../styles/Home.module.css'
import Nav from './Nav';
function Layout({children}) {
    return (
        <div className={styles.container}>
            <Nav/>
            <main className={styles.main}>
                <h1>Hello Mahmoud</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;

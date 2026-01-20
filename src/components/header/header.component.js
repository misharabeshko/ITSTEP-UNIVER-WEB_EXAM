import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css'

import { CaretDown } from 'phosphor-react';

export const Header = () => {
    return (
        <header className={classes.container}>


            <Link to="/" className={classes.logoLink}>
                <div className={classes.logo}>coolors</div>
            </Link>


            <div className={classes.rightSection}>
                <nav className={classes.navMenu}>
                    <div className={classes.navItem}>
                        Tools <span className={classes.arrow}><CaretDown /></span>
                    </div>
                    <div className={`${classes.navItem} ${classes.goPro}`}>Go Pro</div>
                </nav>

                <div className={classes.divider}></div>

                <div className={classes.authButtons}>
                    <Link to="/login" className={classes.signIn}>Sign in</Link>
                    <Link to="/registration" className={classes.signUp}>Sign up</Link>
                </div>
            </div>

        </header>
    )
}
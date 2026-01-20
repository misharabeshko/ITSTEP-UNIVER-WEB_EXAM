import React, { useState, useEffect } from 'react';
import classes from './PluginsAndApps.module.css';

import { HoverColorLetters } from '../hoverColorLetters/hoverColorLetters';
import { getRandomPalette } from '../../shared/colorPaletteGenerator';

import { Link } from 'react-router-dom';


const PluginsAndApps = () => {
    const [currentPalette, setCurrentPalette] = useState(getRandomPalette(5));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPalette(getRandomPalette(5));
        }, 3000);
        return () => clearInterval(interval);
    }, []);



    return (

        <section className={classes.ourToolsSection}>
            <h2 className={classes.title}>
                PLUGINS AND APPS
            </h2>



            <div className={classes.btnsContainer}>
                <Link to="/" className={classes.btn}>
                    iOS App
                </Link>
                <Link to="/" className={classes.btn}>
                    Figma Plugin
                </Link>
                <Link to="/" className={classes.btn}>
                    Adobe Extension
                </Link>
            </div>


            <h1 className={classes.rgbTitle}>
                <HoverColorLetters
                    text="Make something coolorful!"
                    defaultColor="#d0d0d0"
                    colors={currentPalette}
                />
            </h1>


        </section>

    );
};

export default PluginsAndApps;
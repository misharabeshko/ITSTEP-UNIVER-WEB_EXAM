import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './ColorOfTheDay.module.css';
import { getRandomPalette } from '../../shared/colorPaletteGenerator';

const ColorOfTheDay = () => {
    const navigate = useNavigate();
    const [color, setColor] = useState('');

    useEffect(() => {
        const randomColor = getRandomPalette(1)[0];
        setColor(randomColor);
    }, []);


    const hexCode = color.replace('#', '');

    const handleRedirect = () => {
        navigate(`/colors/${hexCode}`);
    };

    return (
        <section className={classes.section}>
            <div className={classes.infoText}>
                <p>
                    Coolors is the lightning-fast, ultra-intuitive color palette generator for designers, creators, and anyone seeking visual harmony.
                    Instantly generate beautiful palettes by hitting the spacebar, or explore millions of popular ones. Extract colors from images, check accessibility, and preview them on real designs. Organize your palettes into projects and export them in multiple formats-effortlessly across web, apps, and plugins. Now with Al!
                </p>
            </div>

            <div className={classes.card} onClick={handleRedirect}>
                <span className={classes.badge}>COLOR OF THE DAY</span>
                <div className={classes.cardContent}>

                    <div className={classes.leftColumn}>
                        <div
                            className={classes.colorPreview}
                            style={{ backgroundColor: color }}
                        ></div>
                        <span className={classes.hexValue}>#{hexCode.toUpperCase()}</span>
                    </div>

                    <div className={classes.colorDetails}>
                        <h3>Midnight Violet</h3>
                        <p>Intense violet-black depths fill any space with intrigue and boldness, channeling mystery and hidden elegance.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColorOfTheDay;
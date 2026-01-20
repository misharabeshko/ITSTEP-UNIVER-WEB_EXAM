import React, { useState, useEffect } from 'react';
import classes from './hero.module.css';
import { HoverColorLetters } from '../hoverColorLetters/hoverColorLetters';
import { getRandomPalette } from '../../shared/colorPaletteGenerator';
import { Link } from 'react-router-dom';

export const Hero = () => {
    const [currentPalette, setCurrentPalette] = useState(getRandomPalette(5));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPalette(getRandomPalette(5));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={classes.heroSection}>
            <div className={classes.mainContainer}>

                {/* ЛІВА ЧАСТИНА */}
                <div className={classes.leftColumn}>
                    <div className={classes.textWrapper}>
                        <h1 className={classes.heroTitle}>
                            <HoverColorLetters
                                text="The super fast color palettes generator!"
                                defaultColor="#000"
                                colors={currentPalette}
                            />
                        </h1>

                        <img
                            src="/and_much_more.svg"
                            alt="And much more"
                            className={classes.andMuchMoreBadge}
                        />

                        <p className={classes.heroDescription}>
                            Create the perfect palette or get inspired by thousands of beautiful color schemes.
                        </p>

                        <div className={classes.buttonGroup}>
                            <Link to="/generator" className={classes.primaryBtn}>
                                Start the Generator
                            </Link>
                            <button className={classes.secondaryBtn}>Explore 10M+ Palettes</button>
                        </div>
                    </div>
                </div>

                {/* ПРАВА ЧАСТИНА */}
                <div className={classes.rightColumn}>
                    <div className={classes.palettePreviewCard}>
                        {currentPalette.map((color, index) => (
                            <div
                                key={`${color}-${index}`}
                                className={classes.paletteColorBar}
                                style={{ backgroundColor: color }}
                            >
                                <span className={classes.hexLabel}>{color.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
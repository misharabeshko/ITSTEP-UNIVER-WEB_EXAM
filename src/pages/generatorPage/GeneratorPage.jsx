import React, { useState, useEffect, useCallback } from 'react';
import classes from './GeneratorPage.module.css';
import { getRandomPalette } from '../../shared/colorPaletteGenerator';
import { Heart, Lock, X, Copy, ArrowsHorizontal, Plus } from 'phosphor-react';
import DefaultLayout from '../../components/layouts/default/defaultLayout';

const GeneratorPage = () => {
    const [colors, setColors] = useState(getRandomPalette(5));
    const [saved, setSaved] = useState(false);

    const generate = useCallback(() => {
        setColors(getRandomPalette(colors.length));
    }, [colors.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                generate();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [generate]);


    const addColor = (index) => {
        if (colors.length < 7) {
            const newColors = [...colors];
            const randomSingleColor = getRandomPalette(1)[0];
            newColors.splice(index + 1, 0, randomSingleColor);
            setColors(newColors);
        }
    };

    return (
        <DefaultLayout withFooter={false}>
            <div className={classes.wrapper}>
                <div className={classes.topBar}>
                    <span>Press the spacebar to generate color palettes!</span>
                    <div className={classes.actions}>
                        <button
                            className={`${classes.saveBtn} ${saved ? classes.isSaved : ''}`}
                            onClick={() => setSaved(true)}
                        >
                            <Heart weight={saved ? "fill" : "bold"} size={24} />
                            <span>Save</span>
                        </button>
                    </div>
                </div>

                <div className={classes.generatorContainer}>
                    {colors.map((color, index) => (
                        <React.Fragment key={`${index}-${color}`}>
                            <div className={classes.colorColumn} style={{ backgroundColor: color }}>
                                <div className={classes.controls}>
                                    <X size={24} cursor="pointer" />
                                    <Copy size={24} cursor="pointer" />
                                    <Lock size={24} cursor="pointer" />
                                    <ArrowsHorizontal size={24} cursor="pointer" />
                                </div>
                                <div className={classes.colorInfo}>
                                    <h2>{color.replace('#', '').toUpperCase()}</h2>
                                    <p>Color Name</p>
                                </div>
                            </div>



                            {/* + */}
                            {index < colors.length - 1 && colors.length < 7 && (
                                <div
                                    className={classes.plusZone}
                                    onClick={() => addColor(index)}
                                    style={{
                                        left: `${(100 / colors.length) * (index + 1)}%`
                                    }}
                                >
                                    <div className={classes.plusCircle}>
                                        <Plus size={20} weight="bold" />
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default GeneratorPage;
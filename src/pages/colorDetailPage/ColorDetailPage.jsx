import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './ColorDetailPage.module.css';
import DefaultLayout from '../../components/layouts/default/defaultLayout';
import { Heart, Eyedropper, ArrowsOut } from 'phosphor-react';

const ColorDetailPage = () => {
    const { colorHex } = useParams();
    const hex = colorHex.replace('#', '');
    const fullHex = `#${hex}`;



    const getRGBString = (h) => {
        const r = parseInt(h.slice(0, 2), 16);
        const g = parseInt(h.slice(2, 4), 16);
        const b = parseInt(h.slice(4, 6), 16);
        return `${r}, ${g}, ${b}`;
    };

    const getCMYKString = (h) => {
        const r = parseInt(h.slice(0, 2), 16) / 255;
        const g = parseInt(h.slice(2, 4), 16) / 255;
        const b = parseInt(h.slice(4, 6), 16) / 255;

        let k = 1 - Math.max(r, g, b);
        if (k === 1) return "0, 0, 0, 100";

        let c = Math.round((1 - r - k) / (1 - k) * 100);
        let m = Math.round((1 - g - k) / (1 - k) * 100);
        let y = Math.round((1 - b - k) / (1 - k) * 100);
        return `${c}, ${m}, ${y}, ${Math.round(k * 100)}`;
    };


    const getHSBString = (h) => {
        let r = parseInt(h.slice(0, 2), 16) / 255;
        let g = parseInt(h.slice(2, 4), 16) / 255;
        let b = parseInt(h.slice(4, 6), 16) / 255;

        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h_deg, s, v = max;

        let d = max - min;
        s = max === 0 ? 0 : d / max;

        if (max === min) {
            h_deg = 0;
        } else {
            switch (max) {
                case r: h_deg = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h_deg = (b - r) / d + 2; break;
                case b: h_deg = (r - g) / d + 4; break;
            }
            h_deg = Math.round(h_deg * 60);
        }

        return `${h_deg}°, ${Math.round(s * 100)}%, ${Math.round(v * 100)}%`;
    };

    const getHSLString = (h) => {
        let r = parseInt(h.slice(0, 2), 16) / 255;
        let g = parseInt(h.slice(2, 4), 16) / 255;
        let b = parseInt(h.slice(4, 6), 16) / 255;

        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h_deg, s, l = (max + min) / 2;

        if (max === min) {
            h_deg = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h_deg = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h_deg = (b - r) / d + 2; break;
                case b: h_deg = (r - g) / d + 4; break;
            }
            h_deg = Math.round(h_deg * 60);
        }

        return `${h_deg}°, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
    };


    return (
        <DefaultLayout>
            <div className={classes.container}>
                <nav className={classes.breadcrumbs}>
                    <span className={classes.crumbItem}>Colors</span>
                    <span className={classes.separator}>&gt;</span>
                    <span className={`${classes.crumbItem} ${classes.crumbLast}`}>Color Name</span>
                </nav>

                <header className={classes.header}>
                    <div className={classes.titleArea}>
                        <h1 className={classes.colorTitle}>Color Name</h1>
                        <p className={classes.description}>
                            Intense depths fill any space with intrigue and boldness,
                            channeling mystery and hidden elegance.
                        </p>
                    </div>
                </header>

                <div className={classes.colorHero} style={{ backgroundColor: fullHex }}>
                    <span className={classes.bigHex}>{hex.toUpperCase()}</span>
                    <div className={classes.heroActions}>
                        <button className={classes.iconBtn}><Eyedropper size={20} weight="bold" /></button>
                        <button className={classes.iconBtn}><ArrowsOut size={20} weight="bold" /></button>
                        <button className={classes.saveBtn}>
                            <Heart size={20} weight="bold" />
                            <span>Save</span>
                        </button>
                    </div>
                </div>

                <section className={classes.conversionSection}>
                    <h2 className={classes.sectionTitle}>Conversion</h2>
                    <div className={classes.grid}>
                        <div className={classes.column}>
                            <div className={classes.row}><strong>HEX</strong> <span>{hex.toUpperCase()}</span></div>
                            <div className={classes.row}><strong>RGB</strong> <span>{getRGBString(hex)}</span></div>
                            <div className={classes.row}><strong>CMYK</strong> <span>{getCMYKString(hex)}</span></div>
                            <div className={classes.row}><strong>HSB</strong> <span>{getHSBString(hex)}</span></div>
                            <div className={classes.row}><strong>HSL</strong> <span>{getHSLString(hex)}</span></div>
                        </div>
                        <div className={classes.column}>
                            <div className={classes.row}><strong>LAB</strong> <span>13, 17, -13</span></div>
                            <div className={classes.row}><strong>XYZ</strong> <span>2, 2, 3</span></div>
                            <div className={classes.row}><strong>LCH</strong> <span>13, 21, 322</span></div>
                            <div className={classes.row}><strong>LUV</strong> <span>13, 8, -13</span></div>
                            <div className={classes.row}><strong>HWB</strong> <span>291, 10, 80</span></div>
                        </div>
                    </div>
                </section>
            </div>
        </DefaultLayout>
    );
};

export default ColorDetailPage;
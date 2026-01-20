import React from 'react';
import classes from './Footer.module.css';
import { TwitterLogo, PinterestLogo, InstagramLogo, FacebookLogo, Globe, CaretDown } from 'phosphor-react';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>

                <div className={classes.topSection}>
                    <div className={classes.column}>
                        <h3>Tools</h3>
                        <ul>
                            <li>Generate your palettes</li>
                            <li>Explore popular palettes</li>
                            <li>Extract palette from image</li>
                            <li>Contrast checker</li>
                            <li>Preview palettes on designs</li>
                            <li>Color picker</li>
                            <li>Tailwind Colors</li>
                            <li>Color Bot</li>
                        </ul>
                    </div>
                    <div className={classes.column}>
                        <h3>Discover</h3>
                        <ul>
                            <li>List of colors</li>
                            <li>Browse gradients</li>
                            <li>Create a gradient</li>
                            <li>Make a gradient palette</li>
                            <li>Image converter</li>
                            <li>Recolor your own design</li>
                            <li>Create a collage</li>
                            <li>Browse free fonts</li>
                            <li>Font Generator</li>
                        </ul>
                    </div>
                    <div className={classes.column}>
                        <h3>Apps</h3>
                        <ul>
                            <li>iOS App</li>
                            <li>Figma Plugin</li>
                            <li>Adobe Extension</li>
                            <li>Chrome Extension</li>
                        </ul>
                    </div>
                    <div className={classes.column}>
                        <h3>Company</h3>
                        <ul>
                            <li>Pricing</li>
                            <li>License</li>
                            <li>Terms of service</li>
                            <li>Privacy policy</li>
                            <li>Cookie policy</li>
                            <li>Manage cookies</li>
                            <li>Help center</li>
                            <li>Advertise</li>
                            <li>Affiliate</li>
                            <li>Contact</li>
                            <li>Feature Requests</li>
                        </ul>
                    </div>
                </div>



                <div className={classes.bottomSection}>
                    <div className={classes.copyright}>
                        © Coolors by <strong>Fabrizio Bianchi</strong>. Let's make something cool!
                    </div>
                    <div className={classes.bottomActions}>
                        <div className={classes.language}>
                            <Globe size={18} />
                            <span>English</span>
                            <CaretDown size={14} weight="bold" />
                        </div>
                        <div className={classes.socials}>
                            <TwitterLogo size={20} weight="fill" />
                            <PinterestLogo size={20} weight="fill" />
                            <InstagramLogo size={20} weight="fill" />
                            <FacebookLogo size={20} weight="fill" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
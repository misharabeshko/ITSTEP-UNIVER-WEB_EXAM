import React from 'react';
import classes from './TrustedBy.module.css';

const logos = [
    { name: 'TNYT', src: '/logos/TNYT.svg' },
    { name: 'Slack', src: '/logos/Slack.svg' },
    { name: 'Dreamworks', src: '/logos/DreamWorks2016.svg' },
    { name: 'GitHub', src: '/logos/GitHub.svg' },
    { name: 'Netflix', src: '/logos/Netflix.svg' },
    { name: 'Airbnb', src: '/logos/Airbnb.svg' },
    { name: 'Dropbox', src: '/logos/Dropbox.svg' },
    { name: 'Microsoft', src: '/logos/Microsoft.svg' },
    { name: 'Ea', src: '/logos/ea.svg' },
    { name: 'Wb', src: '/logos/warnerbros.svg' },
    { name: 'Apple', src: '/logos/apple.svg' },
];


const TrustedBy = () => {
    return (
        <section className={classes.trustedSection}>
            <h2 className={classes.title}>
                TRUSTED BY 8+ MILLION CREATIVE MINDS AND TOP COMPANIES
            </h2>
            <div className={classes.logoRow}>
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.name}
                        className={classes.logo}
                    />
                ))}
            </div>
        </section>
    );
};

export default TrustedBy;
import React from 'react';
import classes from './OurTools.module.css';
import { ArrowRight } from 'phosphor-react';


const OurTools = () => {
    const data = [
        {
            title: 'Palette Generator',
            desc: 'Create beautiful color schemes in seconds with the worldwide loved palette tool. Just hit the spacebar!',
            linkText: 'START THE GENERATOR',
            color: '#008b9a',
            bgColor: '#cffafe'
        },
        {
            title: 'Explore Palettes',
            desc: 'Get inspired by thousands of beautiful color schemes. Search by colors, styles, topics or hex values.',
            linkText: 'EXPLORE 10M+ PALETTES',
            color: '#1e40af',
            bgColor: '#dbeafe'
        },
        {
            title: 'Image Picker',
            desc: 'Extract beautiful colors from your photos and turn them into palettes for your projects.',
            linkText: 'LAUNCH THE IMAGE PICKER',
            color: '#6b21a8',
            bgColor: '#f3e8ff'
        },
        {
            title: 'Contrast Checker',
            desc: 'Calculate the contrast ratio of text and background colors to make your content more accessible.',
            linkText: 'TRY THE CONTRAST CHECKER',
            color: '#9d174d',
            bgColor: '#fce7f3'
        },
        {
            title: 'Palette Visualizer',
            desc: 'Preview your colors on real designs to see how they look in context before using them in your projects.',
            linkText: 'OPEN THE VISUALIZER',
            color: '#b91c1c',
            bgColor: '#fee2e2'
        },
        {
            title: 'Color Picker',
            desc: 'Get useful color information like meaning, usage, variations, accessibility and conversion.',
            linkText: 'LAUNCH THE COLOR PICKER',
            color: '#9a3412',
            bgColor: '#ffedd5'
        },
        {
            title: 'Tailwind Colors',
            desc: 'Preview Tailwind CSS colors on real designs to see how they look in context before using them in your projects.',
            linkText: 'GET YOUR TAILWIND COLORS',
            color: '#854d0e',
            bgColor: '#fef9c3'
        },
        {
            title: 'Color Bot',
            desc: 'Chat with our AI-powered Color Bot, ask questions and get color suggestions for your projects.',
            linkText: 'CHAT WITH COLOR BOT',
            color: '#166534',
            bgColor: '#dcfce7'
        }
    ];

    return (

        <section className={classes.ourToolsSection}>
            <h2 className={classes.title}>
                OUR TOOLS, LOVED MY MILLIONS
            </h2>

            <div className={classes.grid}>
                {data.map((f, index) => (
                    <div
                        key={index}
                        className={classes.card}
                        style={{
                            '--accent-color': f.color,
                            '--base-bg': f.bgColor
                        }}
                    >
                        <h3 className={classes.cartTitle}>{f.title}</h3>
                        <p className={classes.description}>{f.desc}</p>
                        <div className={classes.footer}>
                            <span className={classes.link}>{f.linkText}</span>
                            <ArrowRight size={20} />
                        </div>
                    </div>
                ))}
            </div>

        </section>

    );
};

export default OurTools;
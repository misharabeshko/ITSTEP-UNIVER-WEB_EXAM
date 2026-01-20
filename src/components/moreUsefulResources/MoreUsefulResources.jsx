import React, { useState, useEffect } from 'react';
import classes from './MoreUsefulResources.module.css';



const MoreUsefulResources = () => {

    const data = [
        { title: "Color Names", desc: "Browse and search through a comprehensive list of color names to find the perfect shade for your project." },
        { title: "Free Fonts", desc: "Discover and collect beautiful free fonts for your designs from our curated list of typography resources." },
        { title: "Collage Maker", desc: "Create stylish collages by combining your photos and palettes in seconds." },
        { title: "Browse Gradients", desc: "Explore beautiful gradients for your projects or create your own gradient with the Gradient Maker." },
        { title: "Gradient Palette", desc: "Create a gradient palette between two colors and export it in various formats." },
        { title: "Image Converter", desc: "Convert images to different formats with ease." },]



    return (

        <section className={classes.moreUsefulResources}>
            <h2 className={classes.sectionTitle}>
                More Useful Resources
            </h2>

            <div className={classes.container}>

                {data.map((item, index) => (
                    <div key={index} className={classes.card}>
                        <h3 className={classes.cardTitle}>{item.title}</h3>
                        <p className={classes.cardDesc}>{item.desc}</p>
                    </div>
                ))}


            </div>



        </section>

    );
};

export default MoreUsefulResources;
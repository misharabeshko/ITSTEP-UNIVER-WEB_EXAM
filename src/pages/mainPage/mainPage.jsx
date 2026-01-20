import React from 'react';
import DefaultLayout from '../../components/layouts/default/defaultLayout';
import { Hero } from '../../components/hero/Hero';
import ColorOfTheDay from '../../components/colorOfTheDay/colorOfTheDay';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import OurTools from '../../components/ourTools/OurTools';


const MainPage = () => (
    <DefaultLayout>

        <Hero />
        <TrustedBy />
        <ColorOfTheDay />
        <OurTools />

    </DefaultLayout>
);

export default MainPage;
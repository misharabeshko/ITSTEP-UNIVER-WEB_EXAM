import React from 'react';
import DefaultLayout from '../../components/layouts/default/defaultLayout';
import { Hero } from '../../components/hero/Hero';
import ColorOfTheDay from '../../components/colorOfTheDay/colorOfTheDay';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import OurTools from '../../components/ourTools/OurTools';
import PluginsAndApps from '../../components/pluginsAndApps/pluginsAndApps';
import MoreUsefulResources from '../../components/moreUsefulResources/MoreUsefulResources';

const MainPage = () => (
    <DefaultLayout>

        <Hero />
        <TrustedBy />
        <ColorOfTheDay />
        <OurTools />
        <MoreUsefulResources />
        <PluginsAndApps />

    </DefaultLayout>
);

export default MainPage;
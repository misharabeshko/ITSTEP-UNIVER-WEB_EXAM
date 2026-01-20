import React from 'react';

import { Header } from '../../header/header.component';
import Footer from '../../footer/Footer';

const DefaultLayout = ({ children, withFooter = true }) => {
    return (
        <>
            <Header />

            {children}

            {withFooter && <Footer />}
        </>
    );
};

export default DefaultLayout;
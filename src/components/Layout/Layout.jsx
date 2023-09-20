import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import Spinner from 'components/Spinner/Spinner';


export const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Spinner />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};
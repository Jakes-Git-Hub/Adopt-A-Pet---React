import React from 'react';
import Navigation from '../navigation';
// import Outlet
import { Outlet } from 'react-router-dom';

const Root: React.FC = () => {
    return (
        <>
            <Navigation/>
            <Outlet/>
        </>
    );
};

export default Root;
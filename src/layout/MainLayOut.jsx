import React from 'react';

import { Outlet } from 'react-router-dom';
import { Nav } from '../shared/Nav';

const MainLayOut = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>

        </div>
    );
};

export default MainLayOut;
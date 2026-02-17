import React from 'react';
import { Outlet } from "react-router-dom";
import HeaderSecondary from '../auth/HeaderSecondary';
import AuthFooter from '../auth/AuthFooter';
import Container from '../common/Container';

function AuthLayout() {
    return (
        <>
            <HeaderSecondary />
            <div className='flex flex-1 items-center justify-center py-12 bg-gray-200'>
                <Container>
                    <Outlet />
                </Container>
            </div>
            <AuthFooter />
        </>
    )
}

export default AuthLayout

import React from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import Center from '../../components/Center';
import { UseAuthInit } from '../../hooks/Auth';

const AdminProfilePage: React.FC = () => {
    const {auth} = UseAuthInit();
    return (
        <div>
            <Header title="AdminProfile Page"></Header>
            <Center>
                <h1>Hello Cignit</h1>
                <h2>Welcome to {auth?.user?.role} Profile Page</h2>
                <h3>{auth?.user?.email}</h3>
                <h4>Navigate</h4>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </Center>
        </div>
    );
};

export default React.memo(AdminProfilePage);
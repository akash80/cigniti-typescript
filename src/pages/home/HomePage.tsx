import React from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import Center from '../../components/Center';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header title="Home Page"></Header>
            <Center>
                <h1>Hello Cignit</h1>
                <h2>Welcome to Home Page</h2>
                <h3>Navigate</h3>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </Center>
        </div>
    );
};

export default React.memo(HomePage);
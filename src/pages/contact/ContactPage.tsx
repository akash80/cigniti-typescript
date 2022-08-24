import React from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import Center from '../../components/Center';

const ContactPage: React.FC = () => {
    return (
        <div>
            <Header title="Contact Page"></Header>
            <Center>
                <h1>Hello Cignit</h1>
                <h2>Welcome to Contact Page</h2>
                <h3>Navigate</h3>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
            </Center>
        </div>
    );
};

export default React.memo(ContactPage);
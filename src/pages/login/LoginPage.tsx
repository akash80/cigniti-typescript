import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import LoginForm from '../../components/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <Grid2 container justifyContent="center">
            <Grid2 xs={10} sm={8} md={6} lg={4}>
                <LoginForm />
            </Grid2>
        </Grid2>    
    );
};

export default React.memo(LoginPage);
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';
import {checkEmailPattern, checkPasswordPattern} from '../services/ValidationPattern';
import {signinwithemailpassword} from '../services/firebaseService';
import { User } from '../model/User';

export default function LoginForm(){
    const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(false);
    const [logindata, setLoginData] = React.useState({
        email: '',
        emailError: 'Enter correct email address',
        password: '',
        passwordError: 'Min 8 characters and at least 1 number',
        isValidPassword: true, 
        isValidEmail: true, 
        loginError: '',
        showPassword: false,
        loginButtonDisabled: true,
        signuplink: "/signup",
    });

    const checkEmail = (val:any) =>{
        var email = val.target.value;
        logindata.email = email;
        if(checkEmailPattern(email)){
            logindata.isValidEmail = true;
            if(logindata.isValidPassword && logindata.password)
                setButtonDisabled(true);
            setLoginData({
                ...logindata
            });
        }else{
            logindata.isValidEmail = false;
            setLoginData({ ...logindata});
            setButtonDisabled(false);
        }
      }
      
      const checkPassword = (val:any) =>{
        var password = val.target.value;
        logindata.password = password;
        if(checkPasswordPattern(password)){
            logindata.isValidPassword = true;
            if(logindata.isValidEmail && logindata.email)
                setButtonDisabled(true);
            setLoginData({
                ...logindata
            });
        }else{
            logindata.isValidPassword = false;
            setLoginData({ ...logindata});
            setButtonDisabled(false);
        }
      }

    const submitForm = ()=>{
        setButtonDisabled(false);
        const user:User = {email: logindata.email, password: logindata.password, name: '', role: ''};
        signinwithemailpassword(user).then((res:any) =>{
            console.log(res);
            if(res && res.user){
                setButtonDisabled(true);
            }else{
                logindata.loginError = JSON.stringify(res);
                setLoginData({ ...logindata});
            }
        });
    }

    return (
        <Card sx={{ maxWidth: 600 }} className="login-form-card" >
            <CardMedia
                component="img"
                height="140"
                image="/assets/login.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Login/Sign up
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {logindata.loginError}
                </Typography>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <TextField label="Email" variant="outlined" type="email" onChange={checkEmail} required={true} name="email" error={!logindata.isValidEmail} helperText={logindata.isValidEmail ? '' : logindata.emailError}/>
                    <TextField label="Password" variant="outlined" type="password" onChange={checkPassword} required={true} name="password" error={!logindata.isValidPassword} helperText={logindata.isValidPassword ? '' : logindata.passwordError} />
                        
                    <Button disabled={!buttonDisabled} variant="contained" color="primary" onClick={submitForm}>
                        Login
                    </Button>
                </Box>
                
            </CardContent>
            <CardActions>
                <Button size="small">Forget Password</Button>
            </CardActions>
        </Card>
    );
}


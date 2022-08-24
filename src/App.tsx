import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import { UseAuthInit } from './hooks/Auth';
import AdminProfilePage from './pages/profile/AdminProfilePage';

export const FirebaseConfig = {
	apiKey: "AIzaSyBnHfvAVD8AFUACHMLavRi6zDLlgBzThAI",
	authDomain: "signiti-demo.firebaseapp.com",
	projectId: "signiti-demo",
	storageBucket: "signiti-demo.appspot.com",
	messagingSenderId: "627332907831",
	appId: "1:627332907831:web:b3b7603141cc220b4a10b2",
	measurementId: "G-834CN0VM1H"
  };
  const app = initializeApp(FirebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

const App: React.FC = () => {
  const { auth } = UseAuthInit();
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            
          </Route>
          <Route path="/contact" element={<ContactPage />}>
            
          </Route>
          <Route path="/about" element={<AboutPage />}>
            
          </Route>
          <Route path="/login" element={auth?.loggedIn ? <HomePage/> : <LoginPage />}>
            
          </Route>
          <Route path="/profile" element={auth?.loggedIn ? auth.role === 'admin' ? <AdminProfilePage/> : <ProfilePage /> : <LoginPage />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;

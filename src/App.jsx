
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Body } from "./components/Body";
import {Profile} from "./components/Profile.jsx"
import { FeedPage } from "./components/FeedPage.jsx";
import { LoginPage } from "./components/LoginPage.jsx";
import {SignUp} from "./components/Signup.jsx";
import axios from 'axios';
import {BaseUrl} from './Utils/const.js';
import {useEffect} from 'react';
import { EditProfilePage } from "./components/EditProfilePage.jsx";
import {AboutUsPage} from "./components/AboutUsPage.jsx";
import {ContactPage} from "./components/ContactPage.jsx";
const App=() =>{
  
  return (

    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<Body />}>
          <Route path='/' element={<FeedPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path = '/profile' element = { <Profile/> }/>
          <Route path = '/editProfile' element = { <EditProfilePage /> }/>
          <Route path = '/about' element = { <AboutUsPage /> }/>
          <Route path = '/contact' element = { <ContactPage /> }/>
        </Route > 
        
        
        
        
        
      </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;


import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Body } from "./components/Body";
import {Profile} from "./components/Profile.jsx"
import { FeedPage } from "./components/FeedPage.jsx";
import { LoginPage } from "./components/LoginPage.jsx";

function App() {

  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<Body />}>
          <Route path='/' element={<FeedPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route >
          
        
        <Route path = '/profile' element = { <Profile/> }/>
        
      </Routes>
    </BrowserRouter>
  </>
  );
};

export default App

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MapComponent from './components/MapComponent';
import { GoogleLogin } from '@react-oauth/google';
import LocationComponent from './components/LocationComponent';
import LocationData from './data/LocationData';
import AboutComponent from './components/AboutComponent';
import BlogPage from './components/BlogPageComponent'; 
import InstagramLogo from './images/Instagram_icon.png';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const responseMessage = (response) => {
    console.log(response);
    setIsSignedIn(true);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <Router>
      <div className="bg-purple-600 shadow-lg p-4 m-8 text-white rounded-xl flex justify-between items-center">
        <Link to='/' className="font-bold text-2xl">NoDeskNomad.com</Link>
        <div className="flex gap-4 items-center">
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/blog" className="hover:text-gray-300">Blog</Link> 
          <a href="https://www.instagram.com/nodesknomad/" className="hover:text-gray-300">
            <img src={InstagramLogo} alt="Instagram" className="h-6 w-6" />
          </a>
        </div>
      </div>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col h-screen">
            <div className="flex flex-row ml-10 mr-10 shadow-lg rounded-xl">
              <div className="w-3/5">
                <MapComponent coffeeShops={LocationData} />
              </div>
              <div className="w-2/5 ml-2">
                {isSignedIn ? (
                  <>
                    <div className="flex-1">
                      <ul>
                        {LocationData.map((shop) => (
                          <LocationComponent 
                            key={shop.id}
                            name={shop.name}
                            type={shop.type}
                            price={shop.price}
                            hasWifi={shop.hasWifi}
                          />
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="w-full p-4 text-center bg-white bg-opacity-50 backdrop-filter backdrop-blur-md">
                    <p>Sign in or Sign up to gain access to more locations!</p>
                    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} clientId="25637469653-tn51rjv9sn91tdkt9mqameqrm3o9a09l.apps.googleusercontent.com" />
                  </div>
                )}
              </div>
            </div>
          </div>
        } />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;

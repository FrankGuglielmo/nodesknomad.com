import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponent from './components/MapComponent';
import { GoogleLogin } from '@react-oauth/google';
import LocationListComponent from './components/LocationListComponent.js';
import AboutComponent from './components/AboutComponent';
import BlogPage from './components/BlogPageComponent';

import yelpService from './services/YelpService';

import InstagramLogo from './images/Instagram_icon.png';
import YelpLogo from './images/yelp-logo.png';

import { Analytics } from '@vercel/analytics/react';

import './App.css';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [location, setLocation] = useState(null);
  const [cafes, setCafes] = useState([]);
  const [error, setError] = useState(null);

  const  responseMessage = (response) => {
    console.log(response);
    setIsSignedIn(true);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        try {
            const fetchedCafes = await yelpService.fetchCafes(latitude, longitude);
            setCafes(fetchedCafes);
        } catch (error) {
            setError(error);
        }
    }, (error) => {
        setError(error);
    });
}, []);

  
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col h-screen">
          {/*Nav bar */}
          <div className="bg-purple-600 shadow-lg p-4 m-8 text-white rounded-xl flex justify-between items-center">
            <a href='/'><div className="font-bold text-2xl">NoDeskNomad.com</div></a>
            <div className="flex gap-4 items-center">
              <a href="/about" className="hover:text-gray-300">About Us</a>
              <a href="/blog" className="hover:text-gray-300">Blog</a>
              <a href="https://www.instagram.com/nodesknomad/" className="hover:text-gray-300">
                <img src={InstagramLogo} alt="Instagram" className="h-6 w-6" /> {/* Adjust size as needed */}
              </a>
            </div>
          </div>
  
          <div className="flex flex-row ml-10 mr-10 shadow-lg rounded-xl h-svh">
            <div className="w-3/5">
              <MapComponent location={location} cafes={cafes}/>
            </div>
            <div className="w-2/5 ml-2 h-full">
              {isSignedIn ? (
                <>
                  <div className="flex-1 overflow-auto" style={{height: "80vh"}}>
                    <LocationListComponent location={location} cafes={cafes} error={error} />
                    <div className="powered-by-yelp flex justify-center">
                      <span>Powered by</span>
                      <a href='https://www.yelp.com/'><img src={YelpLogo} alt="Yelp logo" /></a>
                    </div>
                  </div>
                  
                </>
              ) : (
                // Sign in prompt with blurred background
                <div className="w-full p-4 text-center bg-white bg-opacity-50 backdrop-filter backdrop-blur-md">
                  <p>Sign in or Sign up to gain access to more locations!</p>
                  <GoogleLogin onSuccess={responseMessage} onError={errorMessage} clientId= {process.env.GOOGLE_OAUTH_CLIENT_ID} />
                  {/*Powered by yelp with a link to yelp business for the yelp image */}
                  <div className="powered-by-yelp flex justify-center">
                      <span>Powered by</span>
                      <a href='https://www.yelp.com/'><img src={YelpLogo} alt="Yelp logo" /></a>
                    </div>

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
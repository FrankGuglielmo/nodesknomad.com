import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';
import { GoogleLogin } from '@react-oauth/google';

const App = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Fetch coffee shops data here and update state
    // For now, we'll use mock data
    const mockData = [
      { name: 'Coffee Shop 1', latitude: 37.7689, longitude: -122.4220 },
      { name: 'Coffee Shop 2', latitude: 37.7749, longitude: -122.4194 },
      { name: 'Coffee Shop 3', latitude: 37.7649, longitude: -122.4194 },
      { name: 'Coffee Shop 4', latitude: 37.7849, longitude: -122.4194 },

      // Add more shops here
    ];
    setCoffeeShops(mockData);
  }, []);

  const  responseMessage = (response) => {
    console.log(response);
    setIsSignedIn(true);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  
  return (
    <div className="flex flex-col h-screen">
      {/* Nav bar */}
      <div className="bg-purple-600 shadow-lg p-4 text-white">
        <h1>NoDeskNomad.com</h1>
      </div>
      
      {/* Content */}
      <div className="flex-grow flex p-4 space-x-4">
        {/* Map component div */}
        <div className="flex-1 bg-white shadow-lg p-4">
          {/* Map content here */}
          <MapComponent coffeeShops={coffeeShops} />
        </div>
        
        {/* Coffee shops list div */}
        <div className="flex-1 flex flex-col bg-white shadow-lg p-4">
          {/* Coffee shops list content here */}
          {isSignedIn ? (
            <>
              <div className="flex-1">
                <h2 className="text-lg font-bold">Coffee Shops</h2>
                <ul>
                  {coffeeShops.map((shop, index) => (
                    <li key={index}>{shop.name}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            // Sign in prompt with blurred background
            <div className="w-full p-4 text-center bg-white bg-opacity-50 backdrop-filter backdrop-blur-md">
              <p>Sign in or Sign up to gain access to more locations!</p>
              <GoogleLogin onSuccess={responseMessage} onError={errorMessage} clientId="25637469653-tn51rjv9sn91tdkt9mqameqrm3o9a09l.apps.googleusercontent.com" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
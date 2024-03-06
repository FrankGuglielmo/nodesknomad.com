import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';


const App = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    // Fetch coffee shops data here and update state
    // For now, we'll use mock data
    const mockData = [
      { name: 'Coffee Shop 1', latitude: 37.7689, longitude: -122.4220 },
      // Add more shops here
    ];
    setCoffeeShops(mockData);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Nav bar */}
      <div className="bg-purple-600 shadow-lg p-4 text-white text-center">
        NoDeskNomad.com
      </div>
      
      {/* Content */}
      <div className="flex-grow flex p-4 space-x-4">
        {/* Map component div */}
        <div className="flex-1 bg-white shadow-lg p-4">
          {/* Map content here */}
          <MapComponent coffeeShops={coffeeShops} />
        </div>
        
        {/* Coffee shops list div */}
        <div className="flex-1 bg-white shadow-lg p-4">
          {/* Coffee shops list content here */}
          <p>Coffee Shops List</p>
        </div>
      </div>

      {/* Sign in prompt */}
      <div className="w-full bg-white shadow-lg p-4 text-center">
        <p>Sign in or Sign up to gain access to more locations!</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default App;
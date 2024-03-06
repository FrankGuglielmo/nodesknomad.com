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
    <div style={{ display: 'flex' }}>
      <MapComponent coffeeShops={coffeeShops} />
      {/* Add more components here such as LocationDetails */}
    </div>
  );
};

export default App;
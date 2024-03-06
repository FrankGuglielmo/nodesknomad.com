import React from 'react';

const LocationComponent = ({ name, type, price, hasWifi }) => {
  const wifiAvailability = hasWifi ? 'Available' : 'Not Available';

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{type}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm font-medium text-gray-800">{price}</span>
        <span className="text-sm font-medium text-gray-500">{wifiAvailability}</span>
      </div>
      {/* Icons would be added here if necessary */}
    </div>
  );
};

export default LocationComponent;
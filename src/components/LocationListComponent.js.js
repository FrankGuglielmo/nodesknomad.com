import React from 'react';
import LocationComponent from './LocationComponent';

const LocationListComponent = ({location, cafes, error}) => {

    return (
        <div>
            <h2 className="text-2xl font-bold flex justify-center">Cafes near you</h2>
            {cafes.length > 0 ? (
                cafes.map((cafe) => (
                    <LocationComponent
                        key={cafe.id}
                        name={cafe.name}
                        type={cafe.categories[0].title}
                        price={cafe.price}
                    />
                ))
            ) : error ? (
                console.log(error),
                <p>Error fetching cafes.</p>
            ) : (
                <p>Fetching cafes...</p>
            )}
        </div>
    );
};

export default LocationListComponent;
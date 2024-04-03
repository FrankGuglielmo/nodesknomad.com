import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationComponent from './LocationComponent';

const GeolocationComponent = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [cafes, setCafes] = useState([]);
    const [error, setError] = useState(null);

    const fetchCafesFromYelp = async (latitude, longitude) => {
        try {
            const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
                headers: {
                    Authorization: `81zUTyB3Yi40KQnUKBAymNZEVLRKQzyOPZWmzmrauU4H3iuKT3R2yvr2hpdWikoEMKUXvLwTKqhd59EbYNDAKgA0nenftnpw9jPEDiz1sKdK4BKIzWcRLrxhzUQNZnYx`
                },
                params: {
                    latitude: latitude,
                    longitude: longitude,
                    categories: 'cafes'
                }
            });
            setCafes(response.data.businesses);
        } catch (error) {
            console.error('Error fetching data from Yelp:', error);
            setError(error.message);
        }
    };

    const handleSuccess = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        fetchCafesFromYelp(latitude, longitude);
    };

    const handleError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
        }
    }, []);

    return (
        <div>
            {cafes.length > 0 ? (
                cafes.map((cafe) => (
                    <LocationComponent
                        key={cafe.id}
                        name={cafe.name}
                        type={cafe.categories[0].title}
                        price={cafe.price}
                        hasWifi={cafe.attributes.some((attr) => attr.title === 'Wi-Fi')}
                    />
                ))
            ) : error ? (
                <p>Error fetching cafes: {error}</p>
            ) : (
                <p>Fetching cafes...</p>
            )}
        </div>
    );
};

export default GeolocationComponent;
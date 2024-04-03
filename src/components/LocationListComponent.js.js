import React from 'react';
import LocationComponent from './LocationComponent';

const LocationListComponent = ({location, cafes, error}) => {
    // const [location, setLocation] = useState({ latitude: null, longitude: null });
    // const [cafes, setCafes] = useState([]);
    // const [error, setError] = useState(null);

    // const fetchCafesFromYelp = async (latitude, longitude) => {
    //     try {
    //         const response = await axios.get('http://localhost:3001/api/yelp', {
    //             params: {
    //                 latitude: latitude,
    //                 longitude: longitude,
    //                 categories: 'cafes'
    //             }
    //         });
    //         setCafes(response.data.businesses);
    //     } catch (error) {
    //         console.error('Error fetching data from Yelp:', error);
    //         setError(error.message);
    //     }
    // };

    // const handleSuccess = (position) => {
    //     const { latitude, longitude } = position.coords;
    //     setLocation({ latitude, longitude });
    //     fetchCafesFromYelp(latitude, longitude);
    // };

    // const handleError = (error) => {
    //     setError(error.message);
    // };

    // useEffect(() => {
    //     if (!navigator.geolocation) {
    //         setError('Geolocation is not supported by your browser');
    //     } else {
    //         navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    //         console.log('latitude:', location.latitude, 'longitude:', location.longitude)
    //     }
    // }, []);

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
                <p>Error fetching cafes: {error}</p>
            ) : (
                <p>Fetching cafes...</p>
            )}
        </div>
    );
};

export default LocationListComponent;
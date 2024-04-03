
import axios from 'axios';

const YELP_API_ENDPOINT = 'https://api.yelp.com/v3/businesses/search';
// const YELP_API_ENDPOINT = 'http://localhost:3001/api/yelp';
const API_KEY = process.env.YELP_API_KEY;


const YelpService = {
    fetchCafes: async (latitude, longitude) => {
        try {
            const response = await axios.get(YELP_API_ENDPOINT, {
                headers: { Authorization: `Bearer ${API_KEY}` },
                params: {
                    latitude: latitude,
                    longitude: longitude,
                    categories: 'cafes',
                },
            });
            return response.data.businesses;
        } catch (error) {
            // Handle or throw the error
            console.error('Error:', error);
            throw error;
        }
    },
};

export default YelpService;
export default {
    PORT: process.env.PORT || 8000,
    API_ENDPOINT: 
        process.env.REACT_APP_API_BASE_URL || `http://localhost:8000/api`,
    // API_ENDPOINT: `http://localhost:8000/api`, //for testing locally
    API_KEY: process.env.REACT_APP_API_KEY,
}
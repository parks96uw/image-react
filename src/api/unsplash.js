import axios from 'axios';

const ACCESS_KEY = "";

// create an instance of the axios client
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID " + ACCESS_KEY
    }
});

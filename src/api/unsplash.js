import axios from 'axios';

// DEF: Acess Key of Unsplash API
const ACCESS_KEY = "";

// DEF: Create instance of axio client
//      Setup configurations
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID " + ACCESS_KEY
    }
});

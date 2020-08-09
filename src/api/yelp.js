import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer dCHSu43UqZELqWRxnqffKp8Yo_6Eg9-v6ucN8TNcsQE_vNgWF-Amwnh2SFPn4AsuQYiI7oBGSMlMHF3QiE7Q1vPgl-XZNKWCygmL7vEOTJ7nBRbykUM22RvM7ZIuX3Yx'
    }
});
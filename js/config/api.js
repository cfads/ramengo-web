const BASE_URL = 'https://ramengo-api-gv5v.onrender.com';

const HEADERS = {
    "headers": {
        "x-api-key": "6L8UhCLzzcI9EFZBEoGFbqgAAvlEQT6ZlN679_UANHY"
    }
};



const GET_BROTHS = `${BASE_URL}/broths`;
const GET_PROTEINS = `${BASE_URL}/proteins`;
const POST_ORDERS = `${BASE_URL}/orders`;

export {
    HEADERS,
    GET_BROTHS,
    GET_PROTEINS,
    POST_ORDERS
};

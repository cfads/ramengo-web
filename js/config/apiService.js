const API_KEY = '6L8UhCLzzcI9EFZBEoGFbqgAAvlEQT6ZlN679_UANHY';

function createHeaders(additionalHeaders = {}) {
    return {
        'x-api-key': API_KEY,
        ...additionalHeaders
    };
}

export async function fetchData(url, additionalHeaders = {}) {
    try {
        const response = await fetch(url, {
            headers: createHeaders(additionalHeaders)
        });
        if (!response.ok) {
            throw new Error('Error ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error catch', error);
    }
}
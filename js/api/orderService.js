import { GET_BROTHS, GET_PROTEINS, HEADERS, POST_ORDERS } from "./configApi.js"

export const OrderService = () => {
    const getBroths = async () => {
        try {
            const response = await fetch(GET_BROTHS, HEADERS);
            return await response.json();
        } catch (error) {
            console.error('Error fetching broths:', error);
            throw error;
        }
    };

    const getProteins = async () => {
        try {
            const response = await fetch(GET_PROTEINS, HEADERS);
            return await response.json();
        } catch (error) {
            console.error('Error fetching proteins:', error);
            throw error;
        }
    };

    const postOrder = async (orderPayload) => {
        try {
            const response = await fetch(POST_ORDERS, {
                method: 'POST',
                headers: {
                    ...HEADERS.headers,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderPayload)
            });
            return await response.json();
        } catch (error) {
            console.error('Error posting order:', error);
            throw error;
        }
    };

    return {
        getBroths,
        getProteins,
        postOrder
    };
};

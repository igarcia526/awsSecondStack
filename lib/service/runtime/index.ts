import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import axios from 'axios';

const TARGET_API_URL = 'https://myapi.com/v2';

export const handler = async (event: APIGatewayEvent, context: Context, callback: Callback) => {
    try {
        // Define the payload
        const payload = {
            name: "issa",
            age: "45"
        };

        // Send POST request with the payload
        const response = await axios.post(TARGET_API_URL, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Handle the response
        const data = response.data;

        // Return a successful response
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Success',
                data: data
            })
        });
    } catch (error) {
        // Handle any errors
        callback(null, {
            statusCode: error.response?.status || 500,
            body: JSON.stringify({
                message: 'Error',
                error: error.message
            })
        });
    }
};
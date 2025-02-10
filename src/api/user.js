import axios from 'axios';

const API_URL = 'https://127.0.0.1:8000/api/register';

export default class UserAPI {

    static async RegisterUser(user) {
        try {
            const response = await axios.post(API_URL, user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Une erreur est survenue');
        }
    }

}
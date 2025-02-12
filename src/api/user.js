import axios from 'axios';

const API_URL_REGISTER = 'https://127.0.0.1:8000/api/register';
const API_URL_CONNECT = 'https://127.0.0.1:8000/api/login_check';

export default class UserAPI {

    static async RegisterUser(user) {
        try {
            const response = await axios.post(API_URL_REGISTER, user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Une erreur est survenue');
        }
    }

    static async ConnectUser(user) {
        try {
            const response = await axios.post(API_URL_CONNECT, user, {
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
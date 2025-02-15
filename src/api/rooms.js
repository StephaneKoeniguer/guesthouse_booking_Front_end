import axios from 'axios';

const API_URL = 'https://127.0.0.1:8000/api/rooms';

export default class RoomsAPI {

    static async fetchRooms(page = 1, limit = 12) {
        try {
            const response = await axios.get(API_URL + `?page=${page}&limit=${limit}`);
            return response.data;  // Retourne les données des chambres
        } catch (error) {
            throw new Error(error.message);

        }
    }


}
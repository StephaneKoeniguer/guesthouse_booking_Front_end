import axios from 'axios';

const API_URL = 'https://127.0.0.1:8000/api/rooms';

export default class RoomsAPI {

    /**
     * Récupère la liste chambres
     * @param page
     * @param limit
     * @returns {Promise<any>}
     */
    static async fetchRooms(page = 1, limit = 12) {
        try {
            const response = await axios.get(API_URL + `?page=${page}&limit=${limit}`);
            return response.data;  // Retourne les données des chambres
        } catch (error) {
            throw new Error(error.message);

        }
    }


    /**
     * Récupère la liste de chambres par catégories
     * @param category
     * @param page
     * @param limit
     * @returns {Promise<any>}
     */
    static async fetchRoomsPerCategory(category, page = 1, limit = 12) {
        try {
            const response = await axios.get(`${API_URL}/category`, {
                params: {
                    category: category,
                    page: page,
                    limit: limit,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async fetchDetailsRooms(roomId) {
        try {
            const response = await axios.get(`${API_URL}/${roomId}`, {
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }


}
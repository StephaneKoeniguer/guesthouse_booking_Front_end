import axios from 'axios';

const API_URL = 'https://127.0.0.1:8000/api/categories';

export default class CategoryAPI {

    static async fetchCategories() {
        try {
            const response = await axios.get(API_URL);
            return response.data;  // Retourne les données des chambres
        } catch (error) {
            throw new Error(error.message);
        }
    }

}
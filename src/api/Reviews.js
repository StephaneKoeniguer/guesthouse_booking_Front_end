import axios from 'axios';

const API_URL = 'https://127.0.0.1:8000/api/reviews';

export default class ReviewsAPI {

    static async fetchReviewsPerRoom(roomId, page, limit) {
        try {
            const response = await axios.get(`${API_URL}/rooms`, {
                params: {
                    room: roomId,
                    page: page,
                    limit: limit,
                },
            });
            return response.data;

        } catch (error) {
            throw new Error(error.message);
        }
    }

}

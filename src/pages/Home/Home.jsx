import React, { useState, useEffect } from 'react';
import RoomsAPI from '../../api/rooms';
import ErrorDisplay from '../../templates/blog/components/ErrorDisplay';
import Loading from "../../templates/blog/components/Loading";
import RoomList from '../../components/roomList/RoomList';

export function Home() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Utiliser la fonction fetchRooms pour récupérer les données
        const getRooms = async () => {
            try {
                const roomsData = await RoomsAPI.fetchRooms();  // Appel de la méthode statique
                setRooms(roomsData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getRooms();
    }, []);

    if (loading) {
        return <Loading />; // composant Loading
    }

    if (error) {
        return <ErrorDisplay error={error} />;  // composant ErrorDisplay
    }

    return (
        <div>
            <RoomList rooms={rooms} />
        </div>
    );
}

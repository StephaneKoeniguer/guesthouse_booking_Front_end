import React, { useState, useEffect } from 'react';
import RoomsAPI from '../../api/rooms';
import ErrorDisplay from '../../components/errorDisplay/ErrorDisplay';
import Loading from "../../components/loading/Loading";
import Title from '../../components/title/Title';
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
            <Title>Liste des Chambres d'hôtes</Title>
            <RoomList rooms={rooms} />
        </div>
    );
}

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ParticipantList = () => {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/participants');
                setParticipants(response.data);
            } catch (error) {
                console.error("Error fetching participants:", error);
            }
        };
        fetchParticipants();
    }, []);

    return (
        <div>
            <h2>Lista de Participantes</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {participants.length > 0 ? (
                        participants.map((participant) => (
                            <tr key={participant._id}>
                                <td>{participant.name}</td>
                                <td>{participant.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No hay participantes registrados.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ParticipantList;

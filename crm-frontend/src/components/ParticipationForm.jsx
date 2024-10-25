import axios from 'axios';
import React, { useState } from 'react';

const ParticipantForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/participants', { name, email });
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Añadir Participante</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Añadir Participante</button>
        </form>
    );
};

export default ParticipantForm;

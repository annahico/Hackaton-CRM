import axios from 'axios';
import React, { useState } from 'react';

const ParticipantForm = ({ fetchParticipants }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/participants', {
                name,
                email
            });
            fetchParticipants(); // Actualiza la lista después de agregar un participante
            setName('');
            setEmail('');
        } catch (error) {
            console.error("Error adding participant:", error);
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h5 className="card-title">Registrar Participante</h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-warning">Registrar</button>
                </form>
            </div>
        </div>
    );
};

export default ParticipantForm;

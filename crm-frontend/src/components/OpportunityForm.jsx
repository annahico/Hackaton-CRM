import axios from 'axios';
import React, { useState } from 'react';

const OpportunityForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/opportunities', { title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Añadir Oportunidad</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Añadir Oportunidad</button>
        </form>
    );
};

export default OpportunityForm;

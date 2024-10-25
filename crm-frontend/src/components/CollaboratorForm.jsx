import axios from 'axios';
import React, { useState } from 'react';

const CollaboratorForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/collaborators', { name, email, phone, company });
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Añadir Colaborador</h2>
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
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Empresa"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Añadir Colaborador</button>
        </form>
    );
};

export default CollaboratorForm;

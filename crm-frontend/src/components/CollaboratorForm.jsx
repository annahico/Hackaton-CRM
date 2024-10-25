import React, { useState } from 'react';
import axios from 'axios';

const CollaboratorForm = ({ fetchCollaborators }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/collaborators', {
                name,
                email,
                phone,
                company
            });
            fetchCollaborators(); // Actualiza la lista después de agregar un colaborador
            setName('');
            setEmail('');
            setPhone('');
            setCompany('');
        } catch (error) {
            console.error("Error adding collaborator:", error);
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h5 className="card-title">Registrar Colaborador</h5>
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
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Empresa</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={company} 
                            onChange={(e) => setCompany(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-warning">Registrar</button>
                </form>
            </div>
        </div>
    );
};

export default CollaboratorForm;

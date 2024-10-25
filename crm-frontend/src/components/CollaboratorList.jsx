import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CollaboratorList = () => {
    const [collaborators, setCollaborators] = useState([]);

    useEffect(() => {
        const fetchCollaborators = async () => {
            const response = await axios.get('http://localhost:5000/api/collaborators');
            setCollaborators(response.data);
        };
        fetchCollaborators();
    }, []);

    return (
        <div>
            <h2>Lista de Colaboradores</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Empresa</th>
                    </tr>
                </thead>
                <tbody>
                    {collaborators.map((collaborator) => (
                        <tr key={collaborator._id}>
                            <td>{collaborator.name}</td>
                            <td>{collaborator.email}</td>
                            <td>{collaborator.phone}</td>
                            <td>{collaborator.company}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CollaboratorList;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OpportunityList = () => {
    const [opportunities, setOpportunities] = useState([]);

    useEffect(() => {
        const fetchOpportunities = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/opportunities');
                setOpportunities(response.data);
            } catch (error) {
                console.error("Error fetching opportunities:", error);
            }
        };
        fetchOpportunities();
    }, []);

    return (
        <div>
            <h2>Lista de Oportunidades</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {opportunities.length > 0 ? (
                        opportunities.map((opportunity) => (
                            <tr key={opportunity._id}>
                                <td>{opportunity.title}</td>
                                <td>{opportunity.description}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No hay oportunidades registradas.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default OpportunityList;

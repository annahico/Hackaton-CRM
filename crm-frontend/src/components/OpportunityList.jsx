import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OpportunityList = () => {
    const [opportunities, setOpportunities] = useState([]);

    useEffect(() => {
        const fetchOpportunities = async () => {
            const response = await axios.get('http://localhost:5000/api/opportunities');
            setOpportunities(response.data);
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
                    {opportunities.map((opportunity) => (
                        <tr key={opportunity._id}>
                            <td>{opportunity.title}</td>
                            <td>{opportunity.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OpportunityList;

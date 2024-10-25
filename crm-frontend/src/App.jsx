import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CollaboratorForm from './components/CollaboratorForm';
import CollaboratorList from './components/CollaboratorList';
import OpportunityForm from './components/OpportunityForm';
import OpportunityList from './components/OpportunityList';
import ParticipantForm from './components/ParticipantForm';
import ParticipantList from './components/ParticipantList';

function App() {
    return (
        <Router>
            <div className="container mt-5">
                <h1>CRM Halloween</h1>
                <nav>
                    <Link to="/collaborators" className="btn btn-secondary me-2">Colaboradores</Link>
                    <Link to="/participants" className="btn btn-secondary me-2">Participantes</Link>
                    <Link to="/opportunities" className="btn btn-secondary me-2">Oportunidades</Link>
                    <Link to="/add-collaborator" className="btn btn-primary me-2">Añadir Colaborador</Link>
                    <Link to="/add-participant" className="btn btn-primary me-2">Añadir Participante</Link>
                    <Link to="/add-opportunity" className="btn btn-primary">Añadir Oportunidad</Link>
                </nav>
                <Routes>
                    <Route path="/collaborators" element={<CollaboratorList />} />
                    <Route path="/participants" element={<ParticipantList />} />
                    <Route path="/opportunities" element={<OpportunityList />} />
                    <Route path="/add-collaborator" element={<CollaboratorForm />} />
                    <Route path="/add-participant" element={<ParticipantForm />} />
                    <Route path="/add-opportunity" element={<OpportunityForm />} />
                    <Route path="/" element={<CollaboratorList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

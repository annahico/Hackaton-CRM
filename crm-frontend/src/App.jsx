import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CollaboratorForm from './components/CollaboratorForm';
import CollaboratorList from './components/CollaboratorList';
import Navbar from './components/Navbar';
import OpportunityForm from './components/OpportunityForm';
import OpportunityList from './components/OpportunityList';
import ParticipantForm from './components/ParticipantForm';
import ParticipantList from './components/ParticipantList';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<h1 className="text-center">Bienvenido al CRM Halloween</h1>} />
                    <Route path="/collaborators" element={<><CollaboratorForm /><CollaboratorList /></>} />
                    <Route path="/participants" element={<><ParticipantForm /><ParticipantList /></>} />
                    <Route path="/opportunities" element={<><OpportunityForm /><OpportunityList /></>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

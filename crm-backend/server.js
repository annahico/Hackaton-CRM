const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const collaboratorRoutes = require('./routes/collaborators');
const participantRoutes = require('./routes/participants');
const opportunityRoutes = require('./routes/opportunities');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/collaborators', collaboratorRoutes);
app.use('/api/participants', participantRoutes);
app.use('/api/opportunities', opportunityRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

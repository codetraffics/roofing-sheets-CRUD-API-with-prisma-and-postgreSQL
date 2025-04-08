require('dotenv').config();
const express = require('express');
const distributorRoutes = require('./routes/distributorRoutes');
const roofRoutes = require('./routes/roofRoutes');

const app = express();
app.use(express.json());

app.use('/api/distributor', distributorRoutes);
app.use('/api/roof', roofRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

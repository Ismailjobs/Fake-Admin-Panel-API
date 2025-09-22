import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import fakeRoute from './route/fakeadmin.js';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017/fake_admin_panel';

app.use(express.json());

app.use("/admin",fakeRoute);

mongoose.connect(MONGODB_CONNECTION_STRING, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.listen(PORT, () => {
    try {
        console.log(`Fake server is running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Error starting server:', error);
    }
});
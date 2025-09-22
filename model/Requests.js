import mongoose from 'mongoose';

const requestsSchema = new mongoose.Schema({
    ip: { type: String, required: true, unique: true },
    userAgent: { type: String },
    method: { type: String },
    endpoint: { type: String },
    attempts: [
        {
            username: { type: String },
            password: { type: String },
            timestamp: { type: Date, default: Date.now }
        }
    ],
    jwtToken: { type: String }
}, 
{ timestamps: true });

const Requests = mongoose.model('Requests', requestsSchema);

export default Requests;

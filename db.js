import mongoose from 'mongoose';

// Correct MongoDB connection URL (this is a string)
const mongoUrl = 'mongodb://localhost:27017/User';

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,  // To use the new MongoDB driver's connection string parser
    useUnifiedTopology: true  // To use the new topology engine
})
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connected');
});

db.on('error', (err) => {
    console.error('Error in connecting MongoDB:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});


export default db;
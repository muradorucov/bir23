const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/routers');


const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use('/uploads', express.static('./src/uploads'));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
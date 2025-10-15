const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/routers');
const dotenv = require("dotenv");
dotenv.config();

// var whitelist = [
//     process.env.GLOBAL_ORIGIN,
//     "http://127.0.0.1:5500/"
//     // process.env.LOCAL_ORIGIN
// ]

// var corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin) return callback(null, true);
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

app.use(cors());
app.use(express.json());



app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use('/uploads', express.static('./src/uploads'));


app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
});

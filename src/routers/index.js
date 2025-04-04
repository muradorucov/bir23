const express = require('express');
const router = express.Router();
const { findCarByPlateNumber } = require('../controller/serachByPlateNumber');


// file upload
const path = require('path');
const multer = require('multer');
const createFileByCar = require('../controller/createfile');
const createComment = require('../controller/createcomment');
const uploadDir = path.join(__dirname, '../uploads');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        const randomNumber = Math.floor(Math.random() * 1000000);
        const fileName = file.originalname.split('.').slice(0, -1).join('.');
        cb(null, fileName + '-' + randomNumber + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })




router.get('/', findCarByPlateNumber);
router.post('/file/:platenumber', upload.single("file"), createFileByCar);
router.post('/comment/:platenumber', createComment)



module.exports = router;
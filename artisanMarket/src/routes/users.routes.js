const express = require("express");
const router = express.Router();
const path = require("path");
const { users } = require('../controller')

//multer
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../public/img"));
    },
    filename: function(req, file, cb) {
        const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

const upload = multer({ storage: storage });

//Rutas
router.get('/', users.home); /* GET home page. */

router.get('/login', users.login); /* GET login page. */

router.get('/register', users.register); /* GET register page. */
router.post('/registerUser', users.store);

// Acá exportamos el resultado
module.exports = router;
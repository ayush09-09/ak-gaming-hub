const express = require('express')
const router = express.Router()
const upload = require('../middleware/uploadMiddleware')
const { uploadID } = require('../controllers/uploadController')
const { verifyToken } = require('../middleware/auth')

router.post('/', verifyToken, upload.array('images', 5), uploadID)

module.exports = router

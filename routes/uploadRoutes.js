const express = require('express')
const router = express.Router()
const { uploadID } = require('../controllers/uploadController')

router.post('/upload-id', uploadID)

module.exports = router

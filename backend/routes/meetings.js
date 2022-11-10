const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json({'message': 'test'})
    } catch (err) {
        res.json({ success: false, message: err.message() })
    }
})
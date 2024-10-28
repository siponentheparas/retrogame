const express = require('express')
const router = express.Router()
const { data, saveData } = require('../data');

router.get('/', (req, res) => {
    res.json(data)
})

module.exports = router
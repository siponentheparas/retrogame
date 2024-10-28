const express = require('express')
const router = express.Router()
const { data, saveData } = require('../data');

router.get('/', (req, res) => {
    const gamesWithoutHallOfFame = data.games.map(({ hall_of_fame, ...game }) => game);
    res.json({ games: gamesWithoutHallOfFame });
})

module.exports = router
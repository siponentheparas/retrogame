// routes/hallOfFame.js
const express = require('express');
const router = express.Router();
const { data } = require('../data');

router.get('/:gameID', (req, res) => {
  const gameID = parseInt(req.params.gameID, 10);
  const game = data.games.find(g => g.ID === gameID);

  if (game) {
    res.json({ hall_of_fame: game.hall_of_fame });
  } else {
    res.status(404).json({ error: 'Game not found' });
  }
});

module.exports = router;

let express = require('express');
let router = express.Router();
let lobbyController = require('../controllers/lobby.controller');

//create lobby
router.post('/lobby', lobbyController.createLobby);

//join lobby
router.put('/lobby', lobbyController.joinLobby);

//change lobby state (start game, maybe also next round)
// router.patch('/lobby', lobbyController);

//update lobby state
router.get('/lobby', lobbyController.pollLobby);

//lobby has ended
// router.delete('/lobby', lobbyController);

module.exports = router;

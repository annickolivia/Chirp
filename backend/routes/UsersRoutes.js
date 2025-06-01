const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController.js');

router.get('/UserInfo', UserController.getInfos);
router.put('/UpdateInfos', UserController.updateInfo);
router.post('/UserInfo', UserController.createInfos);

module.exports = router;
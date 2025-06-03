const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController.js');

router.get('/GetUserInfo', UserController.getInfos);
router.put('/UpdateInfos', UserController.updateInfo);
router.post('/UpdateAvatar', UserController.updateAvatar);

module.exports = router;
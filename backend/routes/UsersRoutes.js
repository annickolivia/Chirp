const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController.js');
const upload = require('../middleware/uploads.js');

router.get('/GetUserInfo', UserController.getInfos);
router.put('/UpdateInfos', UserController.updateInfo);
router.put('/UpdateAvatar', upload.single('avatar'), UserController.updateAvatar);
router.get('/GetUserAvatar', upload.single('avatar'), UserController.getAvatar);

module.exports = router;
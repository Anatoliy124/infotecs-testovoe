const express = require('express');
const router = express.Router();
const { getUsers, filterUsers, filterByName, filterByAdress, filterByGender, filterByAge } = require('./controller');

router.get('/', getUsers);
router.post('/filterUsers', filterUsers);
router.get('/filterByName', filterByName);
router.get('/filterByAdress', filterByAdress);
router.get('/filterByGender', filterByGender);
router.get('/filterByAge', filterByAge)

module.exports = router;
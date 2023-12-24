const express = require('express');
const { createItems, getItems } = require('../controllers/item.controller');

const router = express.Router()

router.get('/', getItems)
router.post('/create', createItems)

module.exports = router
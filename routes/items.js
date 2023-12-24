const express = require('express');
const { createItems, getItems, getSingleItem } = require('../controllers/item.controller');

const router = express.Router()

router.get('/', getItems)
router.get('/:id', getSingleItem)
router.post('/create', createItems)

module.exports = router
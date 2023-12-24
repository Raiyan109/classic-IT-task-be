const Item = require('../models/items.model.js')


const createItems = async (req, res) => {
    const { image, title, colorVariation, sizeVariation } = req.body

    const item = await Item.create({ image, title, colorVariation, sizeVariation })

    if (!item) {
        return res.status(404).json({
            success: false,
            message: 'No item can be created'
        })
    }

    res.status(200).json({
        success: true,
        data: item
    })
}

const getItems = async (req, res) => {
    const items = await Item.find()
    // .skip(queries.skip)
    // .limit(queries.limit)
    const totalItems = await Item.countDocuments()

    if (!items) {
        return res.status(404).json({
            success: false,
            message: 'No Item found'
        })
    }



    res.status(200).json({
        success: true,
        total: totalItems,
        data: items
    })
}

module.exports = { createItems, getItems }
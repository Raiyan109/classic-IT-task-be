const Item = require('../models/items.model.js')


const createItems = async (req, res) => {
    const { image, title, colors, imgClicked, imgLinked } = req.body

    const item = await Item.create({ image, title, colors, imgClicked, imgLinked })

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

const getSingleItem = async (req, res) => {
    const { id } = req.params
    const item = await Item.findById(id)

    if (!item) {
        return res.status(404).json({
            success: false,
            message: 'No Item found'
        })
    }

    res.status(200).json({
        success: true,
        data: item
    })
}

module.exports = { createItems, getItems, getSingleItem }
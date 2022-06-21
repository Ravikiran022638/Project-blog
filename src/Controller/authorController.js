const authorModel = require("../Models/authorModel")

const createAuthor = async function(req, res) {
    let autherData = req.body
    let saveAuthor = await authorModel.create(autherData)
    res.status(201).send({status: true, data: saveAuthor})
}

module.exports.createAuthor = createAuthor
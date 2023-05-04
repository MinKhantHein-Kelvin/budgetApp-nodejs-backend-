const db = require("../models");
const { QueryTypes } = require('sequelize');

 const getUser =async (req, res) => {
    try {
        data = await db.sequelize.query("SELECT * FROM users", {
            type: QueryTypes.SELECT
        });
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUser
}
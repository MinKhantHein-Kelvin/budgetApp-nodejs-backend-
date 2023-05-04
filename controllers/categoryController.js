const db = require("../models");
const { QueryTypes } = require("sequelize");

const getallCategory = async (req, res) => {
  try {
    data = await db.sequelize.query("SELECT * FROM Category", {
      type: QueryTypes.SELECT,
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (req, res) => {
  let response = "";
  try {
    let existid = req.body.id;
    if (existid == "") {
      data = await db.sequelize.query(
        `INSERT INTO category(code,description) VALUES(:code, :description)`,
        {
          replacements: {
            code: req.body.code,
            description: req.body.description,
          },
          type: QueryTypes.INSERT,
        }
      );
      response = { statuscode: 200, message: "Saved Successful" };
      return res.send(response);
    } else {
      data = await db.sequelize.query(
        `UPDATE category SET code=:code, description =:description WHERE id=:id`,
        {
          replacements: {
            id: existid,
            code: req.body.code,
            description: req.body.description,
          },
          type: QueryTypes.UPDATE,
        }
      );
      response = { statuscode: 200, message: "Updated Successful" };
      return res.send(response);
    }
  } catch (error) {
    return res.status(403).send({
      statuscode: 500,
      message: "Server Error!",
      errmessage: "categoryController.createCategory: " + error.message,
    });
  }
};

const deleteCategory = async (req,res)=>{
    let response = ""
    try {
        data = await db.sequelize.query(`DELETE FROM category WHERE id = :id`, {
            replacements: { id: req.params.id },
            type: QueryTypes.DELETE
          },
          );
        response = { statuscode: 200, message: "Deleted Successful" }
        return res.send(response);
    } catch (error) {
        return res.status(403).send({
            statuscode: 500,
            message: "Server Error!",
            errmessage: "categoryController.deleteCategory: " + error.message,
          });
    }
}

module.exports = {
  getallCategory,
  createCategory,
  deleteCategory    
};

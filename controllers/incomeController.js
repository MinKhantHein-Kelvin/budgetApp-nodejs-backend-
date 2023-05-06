const db = require("../models");
const { QueryTypes } = require("sequelize");

const getallIncome = async (req, res) => {
  try {
    data = await db.sequelize.query("SELECT income.id,category.description as category,income.amount FROM income inner join category on income.category = category.description order by income.id", {
      type: QueryTypes.SELECT,
    });
    res.send(data);
  } catch (error) {
    return res.status(403).send({
        statuscode: 500,
        message: "Server Error!",
        errmessage: "incomeController.getallIncome: " + error.message,
      });
  }
};

const createIncome = async (req, res) => {
    let response = "";
    try {
      let existid = req.body.id;
      if (existid == "") {
        data = await db.sequelize.query(
          `INSERT INTO income(category,amount) VALUES(:category, :amount)`,
          {
            replacements: {
              category: req.body.category,
              amount: req.body.amount,
            },
            type: QueryTypes.INSERT,
          }
        );
        response = { statuscode: 200, message: "Saved Successful" };
        return res.send(response);
      } else {
        data = await db.sequelize.query(
          `UPDATE income SET category=:category, amount =:amount WHERE id=:id`,
          {
            replacements: {
              id: existid,
              category: req.body.category,
              amount: req.body.amount,
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
        errmessage: "incomeController.createIncome: " + error.message,
      });
    }
  };

  const deleteIncome = async (req,res)=>{
    let response = ""
    try {
        data = await db.sequelize.query(`DELETE FROM income WHERE id = :id`, {
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
            errmessage: "incomeController.deleteIncome: " + error.message,
          });
    }
}

module.exports = {
    getallIncome,
    createIncome,
    deleteIncome 
  };
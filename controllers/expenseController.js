const db = require("../models");
const { QueryTypes } = require("sequelize");

const getallExpense = async (req, res) => {
  try {
    data = await db.sequelize.query("SELECT expense.id,category.description as category,expense.amount FROM expense inner join category on expense.category = category.description order by expense.id", {
      type: QueryTypes.SELECT,
    });
    res.send(data);
  } catch (error) {
    return res.status(403).send({
        statuscode: 500,
        message: "Server Error!",
        errmessage: "expenseController.getallExpense: " + error.message,
      });
  }
};

const createExpense = async (req, res) => {
    let response = "";
    try {
      let existid = req.body.id;
      if (existid == "") {
        data = await db.sequelize.query(
          `INSERT INTO expense(category,amount) VALUES(:category, :amount)`,
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
          `UPDATE expense SET category=:category, amount =:amount WHERE id=:id`,
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
        errmessage: "expenseController.createExpense: " + error.message,
      });
    }
  };

  const deleteExpense = async (req,res)=>{
    let response = ""
    try {
        data = await db.sequelize.query(`DELETE FROM expense WHERE id = :id`, {
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
            errmessage: "expenseController.deleteExpense: " + error.message,
          });
    }
}

module.exports = {
    getallExpense,
    createExpense,
    deleteExpense 
  };
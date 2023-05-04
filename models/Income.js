module.exports = (sequelize, DataTypes) => {
    const Income = sequelize.define('Income', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty : true
            },
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        },
        {
            timestamps: false,
            tableName: 'Income'
        });

      return Income;
}
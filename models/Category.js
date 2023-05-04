module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
        code: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty : true
          },
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty : true
          },
        },
        },
        {
            timestamps: false,
            tableName: 'category'
        });

      return Category;
}
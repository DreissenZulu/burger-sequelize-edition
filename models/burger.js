module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("burgers", {
        burgerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                is: /^[a-z0-9\s]+$/i
            },
            field: 'burger_name'
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    return Burger;
};
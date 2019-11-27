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
        },
        customerName: {
            type: DataTypes.STRING,
            validate: {
                is: /^[a-z\s]+$/i
            },
            field: 'customer_name'
        }
    })
    return Burger;
};
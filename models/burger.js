const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (colNewVal, condition, cb) {
        orm.updateOne("burgers", colNewVal, condition, function (res) {
            cb(res);
        });
    }
};

const Burger = sequelize.define("burger", {
    burgerName: {
        type: DataTypes.STRING,
        validate: {
            len: [1, 30]
        },
        field: 'burger_name'
    },
    devoured: DataTypes.BOOLEAN
})

Burger.sync();

module.exports = Burger;
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Carrer = sequelize.define('carrer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Semester: {
        type: DataTypes.STRING,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    timestamps: false
});


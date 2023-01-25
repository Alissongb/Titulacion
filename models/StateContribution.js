import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const StateContribution = sequelize.define('state_contribution', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false
});
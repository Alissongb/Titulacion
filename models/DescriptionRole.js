import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Role } from "./Role.js";
import { Users } from "./User.js";
export const DescriptionRoles = sequelize.define('description_roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_role: {
        type: DataTypes.INTEGER,
        unique: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        unique: true
    },
},{
    timestamps: false
});
Users.hasMany(DescriptionRoles, {foreignKey: 'id_user'});
DescriptionRoles.belongsTo(Users, {foreignKey: 'id_user'});
Role.hasMany(DescriptionRoles, {foreignKey: 'id_role'});
DescriptionRoles.belongsTo(Role, {foreignKey: 'id_role'});

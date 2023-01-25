import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { Users } from './User.js';
import { Carrer } from './Carrer.js';
import { Projects } from './Projects.js';
import { Contributions } from './Contribution.js';
export const Observations = sequelize.define('observations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        unique: true
    },
    id_carrer: {
        type: DataTypes.INTEGER,
        unique: true
    },
    id_project: {
        type: DataTypes.INTEGER,
        unique: true
    },
    id_contribution: {
        type: DataTypes.INTEGER,
        unique: true
    },
    observation: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATE,
    },
}, {
    timestamps: false
});
//claves foraneas
Users.hasMany(Observations, {foreignKey: 'id_user'});
Observations.belongsTo(Users, {foreignKey: 'id_user'});
Carrer.hasMany(Observations, {foreignKey: 'id_carrer'});
Observations.belongsTo(Carrer, {foreignKey: 'id_carrer'});
Projects.hasMany(Observations, {foreignKey: 'id_project'});
Observations.belongsTo(Projects, {foreignKey: 'id_project'});
Contributions.hasMany(Observations, {foreignKey: 'id_contribution'});
Observations.belongsTo(Contributions, {foreignKey: 'id_contribution'});

import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { Users } from './User.js';
import { Carrer } from './Carrer.js';
export const Projects = sequelize.define('projects', {
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
    title: {
        type: DataTypes.STRING,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        unique: true
    },
    date: {
        type: DataTypes.DATE,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        unique: true
    },
}, {
    timestamps: false
});

//claves foraneas
Users.hasMany(Projects, {foreignKey: 'id_user'});
Projects.belongsTo(Users, {foreignKey: 'id_user'});
Carrer.hasMany(Projects, {foreignKey: 'id_carrer'});
Projects.belongsTo(Carrer, {foreignKey: 'id_carrer'});    
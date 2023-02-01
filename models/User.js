import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
export const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    names: {
        type: DataTypes.STRING,
        unique: true
    },
    lastnames: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    identity: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    photo: {
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    role:{
        type: DataTypes.ENUM,
        values: ['teacher','student','admin','tutorship','reader','N/A'],
        defaultValue: 'N/A'
    },
    token: {
        type: DataTypes.TEXT
    },
    token_type: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false
});

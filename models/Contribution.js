import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {StateContribution} from './StateContribution.js';

export const Contributions = sequelize.define('contributions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    datePost: {
        type: DataTypes.DATE,
        
    },
    dateGet: {
        type: DataTypes.DATE,
    },
    grades: {
        type: DataTypes.DECIMAL(10,2)
    },
    document: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    id_state_contribution: {
        type: DataTypes.INTEGER,
        unique: true
    },
}, {
    timestamps: false
});

//claves foraneas
StateContribution.hasMany(Contributions, {foreignKey: 'id_state_contribution'});
Contributions.belongsTo(StateContribution, {foreignKey: 'id_state_contribution'});
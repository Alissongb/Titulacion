import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'titulacionProyecto',
    'postgres',
    '123456',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
)
import {Role} from '../models/Role.js';

// crear el nombre del rol
export const createRole = async (req, res) => {
    const {name} = req.body;
    try {
        let newRole = await Role.create({
            name
        }, {
            fields: ['name']
        });
        if (newRole) {
            return res.json({
                message: 'Role created successfully',
                data: newRole
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
// obtener todos los roles
export const getRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.json({
            data: roles
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
// obtener un rol por id
export const getRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const role = await Role.findOne({
            where: {
                id
            }
        });
        res.json({
            data: role
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
// actualizar un rol por id
export const updateRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const roles = await Role.findAll({
            attributes: ['id', 'name'],
            where: {
                id
            }
        });
        if (roles.length > 0) {
            roles.forEach(async role => {
                await role.update({
                    name
                });
            });
        }
        return res.json({
            message: 'Role updated successfully',
            data: roles
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
// eliminar un rol por id
export const deleteRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRowCount = await Role.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Role deleted successfully',
            count: deleteRowCount
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
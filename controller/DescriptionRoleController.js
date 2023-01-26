import jwt from 'jsonwebtoken';
import { Users } from '../models/User';
import { DescriptionRoles } from '../models/DescriptionRole';
import { Role } from '../models/Role';

//crear una nueva descriptionRole
export const createDescriptionRole = async (req, res) => {
    const { description, id_role, id_user } = req.body;
    try {
        let newDescriptionRole = await DescriptionRoles.create({
            description,
            id_role,
            id_user
        }, {
            fields: ['description', 'id_role', 'id_user']
        });
        if (newDescriptionRole) {
            return res.json({
                message: 'DescriptionRole created successfully',
                data: newDescriptionRole
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
// obtener todos los descriptionRoles
export const getDescriptionRoles = async (req, res) => {
    try {
        const descriptionRoles = await DescriptionRoles.findAll();
        res.json({
            data: descriptionRoles
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
// obtener un descriptionRole por id
export const getDescriptionRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const descriptionRole = await DescriptionRoles.findOne({
            where: {
                id
            }
        });
        res.json({
            data: descriptionRole
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
// obtener un descriptionRole por id_user
export const getDescriptionRoleByIdUser = async (req, res) => {
    try {
        const { id_user } = req.params;
        const descriptionRole = await DescriptionRoles.findOne({
            where: {
                id_user
            }
        });
        res.json({
            data: descriptionRole
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
// obtener un descriptionRole por id_role
export const getDescriptionRoleByIdRole = async (req, res) => {
    try {
        const { id_role } = req.params;
        const descriptionRole = await DescriptionRoles.findOne({
            where: {
                id_role
            }
        });
        res.json({
            data: descriptionRole
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
// actualizar un descriptionRole por id
export const updateDescriptionRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, id_role, id_user } = req.body;
        const descriptionRoles = await DescriptionRoles.findAll({
            attributes: ['id', 'description', 'id_role', 'id_user'],
            where: {
                id
            }
        });
        if (descriptionRoles.length > 0) {
            descriptionRoles.forEach(async descriptionRole => {
                await descriptionRole.update({
                    description,
                    id_role,
                    id_user
                });
            });
        }
        return res.json({
            message: 'DescriptionRole updated successfully',
            data: descriptionRoles
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
// eliminar un descriptionRole por id
export const deleteDescriptionRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRowCount = await DescriptionRoles.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'DescriptionRole deleted successfully',
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
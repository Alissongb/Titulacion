import {Projects} from '../models/Projects.js';
import {Users} from '../models/User.js';
import {Carrer} from '../models/Carrer.js';

//crear un nuevo proyecto 
export const createProject = async (req, res) => {
    const { name, id_user, id_carrer } = req.body;
    try {
        let newProject = await Projects.create({
            name,
            id_user,
            id_carrer
        }, {
            fields: ['name', 'id_user', 'id_carrer']
        });
        if (newProject) {
            return res.json({
                message: 'Project created successfully',
                data: newProject
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
}
//obtener todos los proyectos
export const getProjects = async (req, res) => {
    try {
        const projects = await Projects.findAll();
        res.json({
            data: projects
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
}
//obtener un proyecto por id
export const getProjectById = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Projects.findOne({
            where: {
                id
            }
        });
        res.json(project);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
}
//actualizar un proyecto por id
export const updateProjectById = async (req, res) => {
    const { id } = req.params;
    const { name, id_user, id_carrer } = req.body;
    try {
        const projects = await Projects.findAll({
            attributes: ['id', 'name', 'id_user', 'id_carrer'],
            where: {
                id
            }
        });
        if (projects.length > 0) {
            projects.forEach(async project => {
                await project.update({
                    name,
                    id_user,
                    id_carrer
                });
            })
        }
        return res.json({
            message: 'Project updated successfully',
            data: projects
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
}
//eliminar un proyecto por id
export const deleteProjectById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteRowCount = await Projects.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Project deleted successfully',
            count: deleteRowCount
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
}
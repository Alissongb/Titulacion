import {Contributions} from '../models/Contribution.js';

//crear una nueva contribution
export const createContribution = async (req, res) => {
    const {datePost,dateGet,grades,document,status,id_state_contribution} = req.body;
    try {
        let newContribution = await Contributions.create({
            datePost,
            dateGet,
            grades,
            document,
            status,
            id_state_contribution
        }, {
            fields: ['datePost','dateGet','grades','document','status','id_state_contribution']
        });
        if (newContribution) {
            return res.json({
                message: 'Contribution created successfully',
                data: newContribution
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
//obtener todas las contributions
export const getContributions = async (req, res) => {
    try {
        const contributions = await Contributions.findAll();
        res.json({
            data: contributions
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
//obtener una contribution por id
export const getContributionById = async (req, res) => {
    try {
        const {id} = req.params;
        const contribution = await Contributions.findOne({
            where: {
                id
            }
        });
        res.json({
            data: contribution
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
//eliminar una contribution por id
export const deleteContribution = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteRowCount = await Contributions.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Contribution deleted successfully',
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
//actualizar una contribution por id
export const updateContribution = async (req, res) => {
    try {
        const {id} = req.params;
        const {datePost,dateGet,grades,document,status,id_state_contribution} = req.body;
        const contributions = await Contributions.findAll({
            attributes: ['id','datePost','dateGet','grades','document','status','id_state_contribution'],
            where: {
                id
            }
        });
        if (contributions.length > 0) {
            contributions.forEach(async contribution => {
                await contribution.update({
                    datePost,
                    dateGet,
                    grades,
                    document,
                    status,
                    id_state_contribution
                });
            })
        }
        return res.json({
            message: 'Contribution updated successfully',
            data: contributions
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

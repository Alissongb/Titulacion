import { StateContribution } from "../models/StateContribution.js";

//crear una nueva stateContribution
export const createStateContribution = async (req, res) => {
    const {descriptions} = req.body;
    try {
        let newContribution = await StateContribution.create({
            descriptions,
        }, {
            fields: ['descriptions']
        });
        if (newContribution) {
            return res.json({
                message: 'New StateContribution created',
                data: newContribution
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
//obtener todas las stateContributions
export const getStateContributions = async (req, res) => {
    try {
        const stateContributions = await StateContribution.findAll();
        res.json({
            data: stateContributions
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
//obtener una stateContribution por id
export const getStateContributionById = async (req, res) => {
    try {
        const { id } = req.params;
        const stateContribution = await StateContribution.findOne({
            where: {
                id
            }
        });
        res.json(stateContribution);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
//actualizar una stateContribution por id
export const updateStateContributionById = async (req, res) => {
    try {
        const { id } = req.params;
        const { descriptions } = req.body;
        const stateContributions = await StateContribution.findAll({
            attributes: ['id', 'descriptions'],
            where: {
                id
            }
        });
        if (stateContributions.length > 0) {
            stateContributions.forEach(async stateContribution => {
                await stateContribution.update({
                    descriptions
                });
            });
        }
        return res.json({
            message: 'StateContribution updated successfully',
            data: stateContributions
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
//eliminar una stateContribution por id
export const deleteStateContributionById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRowCount = await StateContribution.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'StateContribution deleted successfully',
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
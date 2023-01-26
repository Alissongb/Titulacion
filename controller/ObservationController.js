import { Users } from "../models/User.js";
import {Carrer} from "../models/Carrer.js";
import { Contributions } from "../models/Contribution.js";
import {Projects} from "../models/Project.js";
import {Observation} from "../models/Observation.js";

//crear una observacion
export const createObservation = async (req, res) => {
    const {id_project, id_user, id_contribution, observation,dateDescription} = req.body;
    try {
        let newObservation = await Observation.create({
            id_project,
            id_user,
            id_contribution,
            observation,
            dateDescription
        }, {
            fields: ['id_project', 'id_user', 'id_contribution','id_carrer', 'observation','dateDescription']
        });
        if (newObservation) {
            return res.json({
                message: 'Observation created successfully',
                data: newObservation
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

//obtener todas las observaciones
export const getObservations = async (req, res) => {
    try {
        const observations = await Observation.findAll({
            include: [
                {
                    model: Projects,
                    as: "project"
                },
                {
                    model: Users,
                    as: "user"
                },
                {
                    model: Contributions,
                    as: "contribution"
                },
                {
                    model: Carrer,
                    as: "carrer"
                }

            ]
        });
        res.json(observations);
    } catch (error) {
        console.log(error);
    }
}

//obtener una observacion por id
export const getObservationById = async (req, res) => {
    let { id } = req.params;
    try {
        const observation = await Observation.findOne({
            where: {
                id
            },
            include: [
                {
                    model: Projects,
                    as: "project"
                },
                {
                    model: Users,
                    as: "user"
                },
                {
                    model: Contributions,
                    as: "contribution"
                },
                {
                    model: Carrer,
                    as: "carrer"
                }
            ]
        });
        res.json(observation);
    } catch (error) {
        console.log(error);
    }
}

//actualizar una observacion por id
export const UpdateObservationById = async (req, res) => {
    const { id } = req.params;
    const { id_project, id_user, id_contribution, observation,dateDescription } = req.body;
    try {
        const observation = await Observation.findAll({
            attributes: ['id_project', 'id_user', 'id_contribution', 'observation','dateDescription','id_carrer'],
            where: {
                id
            }
        });
        if (observation.length > 0) {
            observation.forEach(async observation => {
                await observation.update({
                    id_project,
                    id_user,
                    id_contribution,
                    observation,
                    dateDescription
                });
            });
        }
        return res.json({
            message: 'Observation Updated Successfully',
            data: observation
        });
    } catch (error) {
        console.log(error);
    }

}

// eliminar una observacion por id
export const deleteObservationById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteRowCount = await Observation.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Observation Deleted Successfully',
            count: deleteRowCount
        });
    } catch (error) {
        console.log(error);
    }
}

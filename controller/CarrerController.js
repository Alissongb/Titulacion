import {Carrer} from '../models/Carrer.js';

//crear una nueva carrera
export const createCarrer = async (req, res) => {
    const { Semester, name } = req.body;
    try {
        let newCarrer = await Carrer.create({
            Semester,
            name
        }, {
            fields: ['Semester', 'name']
        });
        if (newCarrer) {
            return res.json({
                message: 'Carrer created successfully',
                data: newCarrer
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
//obtener todas las carreras
export const getCarrers = async (req, res) => {
    try {
        const carrers = await Carrer.findAll();
        res.json({
            data: carrers
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
}
//obtener una carrera por id
export const getCarrerById = async (req, res) => {
    const { id } = req.params;
    try {
        const carrer = await Carrer.findOne({
            where: {
                id
            }
        });
        res.json(carrer);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
}
//actualizar una carrera por id
export const updateCarrerById = async (req, res) => {
    const { id } = req.params;
    const { Semester, name } = req.body;
    try {
        const carrers = await Carrer.findAll({
            attributes: ['id', 'Semester', 'name'],
            where: {
                id
            }
        });
        if (carrers.length > 0) {
            carrers.forEach(async carrer => {
                await carrer.update({
                    Semester,
                    name
                });
            });
        }
        return res.json({
            message: 'Carrer updated successfully',
            data: carrers
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
//eliminar una carrera por id
export const deleteCarrerById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteRowCount = await Carrer.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Deleting carrera successfully',
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

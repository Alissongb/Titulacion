import {Users} from '../models/User.js';


//obtener todos los usuarios
export const getUsers = async (req, res) => {
    const users = await Users.findAll();
    res.json(users);
}

//obtener un usuario por id
export const getUserById = async (req, res) => {
    let {id} = req.params;
    try {
        const user = await Users.findOne({
            where: {
                id
            }
        });
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}
//actualizar un usuario por id
export const UpdateUserById = async (req, res) => {
    const {id}= req.params;
    const {names, lastnames, email, password, identity, phone, photo} = req.body;
    try {
        const user = await Users.findAll({
            attributes: ['names', 'lastnames', 'email', 'password', 'identity', 'phone', 'photo'],
            where: {
                id
            }
        });
        if (user.length > 0) {
            user.forEach(async user => {
                await user.update({
                    names,
                    lastnames,
                    email,
                    password,
                    identity,
                    phone,
                    photo
                });
            });
        }
        return res.json({
            message: 'User Updated Successfully',
            data: user
        });
    } catch (error) {
        console.log(error);
    }

}
//cambiar el estado de un usuario por id
export const deleteLogicUserById = async (req, res) => {
const {id} = req.params;
    try {
        const user = await Users.findAll({
            attributes: ['state'],
            where: {
                id
            }
        });
        if (user.length > 0) {
            user.forEach(async user => {
                await user.update({
                    state: false
                });
            });
        }
        return res.json({
            message: 'User Deleted Successfully',
            data: user
        });
    } catch (error) {
        console.log(error);
    }
}
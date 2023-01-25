import jwt from 'jsonwebtoken';
import bycrypt from 'bcrypt';
import { Users } from '../models/User.js';

export const login = async (req, res) => {
    const { email, password } = req.body;
    Users.findOne({
        where: {
            email
        },
    }).then(user => {
        if(!user){
            return res.status(401).send({error:"Invalid email or password"})
        }
        const validPassword = bycrypt.compareSync(password, user.password);
        if(!validPassword){
            return res.status(401).send({error:"Invalid email or password"})
        }
    //generar token
    const token=jwt.sign({id:user.id,email:user.email},'secretkey',{
        expiresIn:60*60*24
        }
        );
        console.log(token);
    Users.update(
        { token ,token_type: 'Bearer'},
        {
          where: {
            id: user.id,
          },
        }
      );
    res.status(200).send({token,token_type: 'Bearer'});
}).catch(err => {
    console.error(err);
});
}

// registro de usuario
export const register = async (req, res) => {
    const {names, lastnames, email,identity, phone, photo} = req.body;
    const password = bycrypt.hashSync(req.body.password, 10);
    Users.create({
        names,
        lastnames,
        email,
        password,
        identity,
        phone,
        photo,
        state: true
    }).then(user => {
        const token=jwt.sign({id:user.id,email:user}, 'secretkey',{
            expiresIn:60*60*24
            });
        Users.update({token,token_type: 'Bearer'},{
            where: {
                id: user.id,
            },
        });
        res.status(200).send({token,token_type: 'Bearer'
        ,message:'User created successfully'});

    }).catch((err) => {
        if(err.name==='SequelizeUniqueConstraintError'){
             res.status(500).json({
                 message: 'Username or email already exists',
                 data: {}
             });
         }else{
         console.error(err);
           res.status(500).json({
           message: 'Something goes wrong',
           data: {}
         
       });
     }
       })
   }
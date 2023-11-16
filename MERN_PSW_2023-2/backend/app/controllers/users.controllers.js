import User from "../models/user.js";
//import fs from 'fs-extra'

export const getUsers = async (req, res) => {
    try{
        //throw new Error('This is my own error');
        const users = await User.find();
        res.send(users);
    } catch (error) {
        return res.status(500).json("Error: "+error.message);
    }
};

export const createUser = async (req, res) =>{
    try{
        const { name, email, password, image } = req.body;
        //coloco nula la imágen para entender que no es obligatoria al momento de crearla
        //var image = null;
        console.log(req.body);

    const newUser = new User({ name, email, password, image});
    await newUser.save();
    return res.json(newUser);
} catch(error) {
    return res.status(500).json("Error: "+error.message);
}
};

    export const updateUser = async (req, res) =>{
        try{
            const updateUser = await User.findByIdAndUpdate(req.params.id, req.body,{
                new: true,
            });
            console.log(req.params)
            return res.json(updateUser);
        } catch(error) {
            return res.status(500).json("Error: "+error.message);
        }
    };

    export const getUser = async (req, res) => {
        try{
            const ConsultarUser = await User.findById(req.params.id);

            if(!ConsultarUser){
                return res.sendStatus(404);
            } else {
                return res.json(ConsultarUser);
            }
        } catch (error){
            return res.status(500).json("Error: "+error.message);
        }
    };
    export const deleteUser = async (req, res) =>{
        try{
            const EliminarUser = await User.findByIdAndDelete(req.params.id);
            if(! EliminarUser) {
                return res.sendStatus(404);
            } if(EliminarUser.image.public_id){
                await deleteImage(EliminarUser.image.public_id)
            }
            console.log("Usuario eliminado exitosamente: "+EliminarUser.name)
            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json("Error: "+error.message);
        }
    };


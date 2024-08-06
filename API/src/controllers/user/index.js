const UserSchema = require("../../models/user")

const UserController = {
    getUsers: async (req, res) => {
        try {
            const users = await UserSchema.findAll();
            res.status(200).json({users: users});
        } catch (error) {
            console.log(error);
        }
    },
    getUser: async (req, res) => {
        try {
            const {id} = req.params;
            const user = await UserSchema.findByPk(id);
            res.status(200).json({user: user});
        } catch (error) {
            console.log(error);
        }
    },
    createUser: async (req, res) => {
        try {
            const {name, email} = req.body;
            console.log(req.body);
            if (!name || !email) throw new Error('Invalid username or email');
            const user = await UserSchema.create({name: name, email: email}); 
            res.status(201).json({user: user});
        } catch (error) {
            console.log(error);
        }
    },
    updatetUser: async (req, res) => {
        try {
            const {id} = req.params;
            const {name, email} = req.body;
            const user = await UserSchema.findByPk(id); 
            if (!user) return res.status(404).json({message: 'User not found'});
            user.name = name;
            user.email = email;
            user.save();
            res.status(201).json({user: user});
        } catch (error) {
            console.log(error);
        }
    },
    deletetUser: async (req, res) => {
        try {
            const {id} = req.params;
            const user = await UserSchema.findByPk(id); 
            user.destroy({
                where: {
                    id: id,
                }
            });
            res.status(200).json({user: user});
        } catch (error) {
            console.log(error);
        }
    },
    
}

module.exports = UserController;
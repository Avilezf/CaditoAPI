const userModels = require('../models/user.models');
import bcrypt from 'bcrypt';

const userLoginService = (req: any) => {
    return new Promise( async (resolve, reject) => {
        if(req == null){
            reject({ data: "Invalid user id", status: 500 });
            return;
        }

        try {
            const user = await userModels.findOne({ username: req?.username});
            if (user) {
                const validPassword = await bcrypt.compare(req?.password, user?.password);
                if (validPassword) {
                    resolve(user);
                } else {
                    resolve({ data: "Password incorrect", status: 404  });
                }
            } else {
                resolve({ data: "Username incorrect", status: 404 });
            }
    
        } catch (error) {
            console.log(error);
            reject({ data: "Server internal error", status: 500 });
        }
    });
};

const tokenLoginService = (req: any) => {
    return new Promise( async (resolve, reject) => {
        try {
            const user = await userModels.findById(req.body.user_id,'-password');
            if (!user) {
                resolve({ data: "User not found", status: 404 });
            } else {
                resolve(user);
            }
    
        } catch (error) {
            console.log(error);
            reject({ data: "Server internal error", status: 500 });
        }
    });
}

const userRegisterService = (req: any) => {
    return new Promise( async (resolve, reject) => {

        const user = await userModels.findOne({ username: req.body.username });
        try {
            if (!user) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
                const newUser = await userModels.create(req.body);
                resolve(newUser);
            } else {
                resolve({ data: "User already exist" });
            }
        } catch (error) {
            console.log(error);
            reject({ data: "Server internal error" });
        }
    });
}

const getUserService = (req: any) => {
        return new Promise( async (resolve, reject) => {
            try {
                const user = await userModels.findById(req.query.user_id,'-password');
                if (!user) {
                    resolve({ data: "User not found", status: 404 });
                } else {
                    resolve(user);
                }
            } catch (error) {
                console.log(error);
                reject({ data: "Server internal error", status: 500 });
            }
        });
    }

    module.exports = { userLoginService, tokenLoginService, userRegisterService, getUserService }
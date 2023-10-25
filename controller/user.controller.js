const db = require('../models/index');
class UserController {
    async createUser(req,res) {
        console.log(req.body)  
        const {name} = req.body;
        const newPerson = await db
console.log(name);
res.json(newPerson.rows[0]);
    }
    async getUsers(res,req) {

    }
    async getOneUser(res,req) {

    }
    async updateUser(res,req) {

    }
    async deleteUser(res,req) {

    }
}
module.exports = new UserController();
const bcrypt = require("bcrypt");
const User = require("../models/User");

const addNewUser = async (req, res) => {
    const {firstname, lastname, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User ({
        firstname, lastname, email, password: hashedPassword
    })
    const savedUser = await user.save()
    res.status(201).json(savedUser)
}

module.exports = addNewUser;
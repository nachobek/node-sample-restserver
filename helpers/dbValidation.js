const Role = require('../models/role');
const User = require('../models/user');


// Custom validators.

const roleValidation = async (role = '') => {
    const roleExists = await Role.findOne({role}); // Same as: .findOne({role: role});
    if (!roleExists) {
        throw new Error('Invalid role'); // This throw will not halt the application. It will rather add the error to the list of errors collected by the check() middleware.
    }
}

const emailValidation = async (email) => {
    const emailExists = await User.findOne({email: email}); // Same as doing: .findOne({email});

    if (emailExists) {
        throw new Error('Email already exists');
    }}

const userValidationById = async (id) => {
    const userExists = await User.findById(id);

    if (!userExists) {
        throw new Error('User not found with given ID');
    }}

const paginationValidation = async (number) => {
    if (number < 0 || !Number.isInteger(Number(number))) {
        throw new Error('Invalid pagination argument');
    }}

module.exports = {
    roleValidation,
    emailValidation,
    userValidationById,
    paginationValidation
}
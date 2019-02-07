const { Schema, model } = require('mongoose');
const encryption = require('../util/encryption');

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    hashedPass: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    salt: { type: String, required: true },
    roles: [{ type: String }]
});


userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

const User = model( "User", userSchema );
// TODO: Create an admin at initialization here

User.seedAdmin = async () => {
    try {
        const users = await User.find();
        if (users.length > 0) {
            return;
        }
        const salt = encryption.generateSalt();
        const hashedPass = encryption.generateHashedPassword(salt, 'Admin');

        return User.create({
            username: 'Admin',
            hashedPass,
            firstName: 'Pesho',
            lastName: 'Petrov',
            salt,
            roles: ['Admin']
        });
    }catch(err) {
        console.log(err);
    }
}
module.exports = User;

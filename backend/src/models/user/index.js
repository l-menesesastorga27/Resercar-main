const {users, createUser, updateUser} =require('./user.model.js');

module.exports = {
    list: async () => {
        return users();
    },
    create: async (name, lastName, email, password, rol, rut) => {
        return createUser(name, lastName, email, password, rol, rut);
    },
    update: async (id, email) => {
        return updateUser(id, email);
    }
};
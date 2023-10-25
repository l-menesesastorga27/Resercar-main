const { Rol } = require('../database/database');

const insertRoles = async () => {
    const roles = [
        {name: 'ADMIN_ROLE'},
        {name: 'USER_ROLE'},
        {name: 'GUEST_ROLE'},
        {name: 'PARKING_ROLE'},
    ]
    await Rol.bulkCreate(roles)
;    console.log('Roles loaded in the db');  
};
module.exports = {
    insertRoles
}
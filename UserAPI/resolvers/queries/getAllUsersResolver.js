import db from '../../_db.js'
export const getAllUsersResolver = {
    users() {
        return db.users;
    },
};
import db from '../../_db.js';

export const deleteUserResolver = {
    deleteUser(_, { id }) {
        const index = db.users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new Error(`User with id ${id} not found`);
        }
        const deletedUser = db.users.splice(index, 1);
        return deletedUser[0];
    },
};
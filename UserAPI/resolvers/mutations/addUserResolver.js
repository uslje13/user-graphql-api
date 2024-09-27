import { v4 as uuidv4 } from 'uuid';
import db from '../../_db.js';

export const addUserResolver = {
    addUser(_, { name, email }) {
        const newUser = {
            id: uuidv4(),
            name,
            email
        };
        db.users.push(newUser);
        return newUser;
    },
};
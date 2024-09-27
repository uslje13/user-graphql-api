
import User from '../../model/user.js';

export const addUserResolver = {
    async addUser(_, { name, email }) {
        const newUser = new User({ name, email });
        await newUser.save();
        return newUser;
    },
};
import User from '../../model/user.js';

export const getAllUsersResolver = {
    async users() {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw new Error("Failed to fetch users");
        }
    },
};
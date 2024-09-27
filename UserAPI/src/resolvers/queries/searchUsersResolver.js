import User from '../../model/user.js';

export const searchUsersResolver = {
    async searchUsers(_, { searchTerm }) {
        try {
            const searchRegex = new RegExp(searchTerm, 'i');

            const users = await User.find({
                $or: [{ name: { $regex: searchRegex } }, { email: { $regex: searchRegex } }]
            });

            return users;
        } catch (error) {
            console.error("Error searching for users:", error);
            throw new Error("Failed to search for users");
        }
    }
};
import User from '../../model/user.js';

export const deleteUserResolver = {
    async deleteUser(_, { id }) {
        try {

            const deletedUser = await User.findOneAndDelete({ _id: id });

            if (!deletedUser) {
                throw new Error(`User with id ${id} not found`);
            }

            return deletedUser;
        } catch (error) {
            console.error("Error deleting user:", error);
            throw new Error("Failed to delete user");
        }
    },
};
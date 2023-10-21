const User = require("../../models/User")

module.exports = {
    users: async () => {
        const data = await User.find()
        return data;
    },
    createEmployee: async (args) => {

        const newUser = new User({
            first_name: args.first_name,
            last_name: args.last_name,
            Age: args.Age,
            dateOfJoining: args.dateOfJoining,
            title: args.title,
            department: args.department,
            employeeType: args.employeeType,
        })

        const data = await newUser.save()
        return data;
    },
    getUserByType: async (args) => {
        const data = await User.find({ employeeType: args.employeeType })
        return data
    },
    filterEmployee: async (args) => {
        const query = {};

        if (args.employeeType && args.employeeType !== "") {
            query.employeeType = args.employeeType;
        }

        if (args.department && args.department !== "") {
            query.department = args.department;
        }

        if (args.title && args.title !== "") {
            query.title = args.title;
        }

        const data = await User.find(query);
        return data
    },
    updateEmployee: async (args) => {
        const data = await User.findByIdAndUpdate(args._id, { $set: { title: args.title, department: args.department, currentStatus: args.currentStatus } }, { new: true });
        return data;
    },
    deleteEmployee: async (args) => {
        const data = await User.findByIdAndDelete(args._id);
        return data
    },
    getSingleEmployee: async (args) => {
        const data = await User.findById({ _id: args._id });
        return data
    }
}
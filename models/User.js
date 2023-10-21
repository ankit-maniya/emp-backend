const { default: mongoose, model } = require("mongoose");

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    dateOfJoining: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    employeeType: {
        type: String,
        required: true
    },
    currentStatus: {
        type: String,
        default: "1",
        required: true
    }
})

module.exports = mongoose.model("User", userSchema)
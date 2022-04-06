import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    skill: [String],
    salary: Number,
    designation: String,
    company: String
});

const UserMessage = mongoose.model('UserMessage', userSchema);

export default UserMessage;
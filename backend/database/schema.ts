import mongoose from "mongoose";
const resultsSchema = new mongoose.Schema({
  result: Number,
});

const usersSchema = new mongoose.Schema({
  email: String,
  password: String,
  token: String,
});

export const Results = mongoose.model("Results", resultsSchema);
export const Users = mongoose.model("Users", usersSchema);

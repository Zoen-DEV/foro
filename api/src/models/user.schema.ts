import mongoose, { Schema } from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
    },
    userName: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
    },
    password: String,
  },
  { timestamps: true }
);

UserSchema.plugin(uniqueValidator, { message: "is already taken." });

export const User = mongoose.model("User", UserSchema);

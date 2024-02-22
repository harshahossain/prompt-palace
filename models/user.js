import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true, "Email already exists!"],
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email required"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    trim: true,
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema); // basic 'express' expression
//for the next shenanigans of being serverless(the route gets called everytime, the connection gets established everytime)
//so we have to make  the additional check

export default User;

//the 'models' object is provided by the mongoose library
//and stores all the registered models.

//if a model named 'User' already exist in the 'modles' object, it
//assigns that existing model to the "User" variable.

//this prevents the redefining the model and ensures that existing model
//is reused

//the newly created model is then assigned to the "User" variable

//if the model named "User" doesnt exist in the "models" object, the "model" function
// from moongoose is called to create a new model

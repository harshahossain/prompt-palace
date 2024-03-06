import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId, //so creator is already in the database (user)
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required!"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required!"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema); // basic 'express' expression
//for the next shenanigans of being serverless(the route gets called everytime, the connection gets established everytime)
//so we have to make  the additional check

export default Prompt;

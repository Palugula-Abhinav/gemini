import mongoose from "mongoose";

let conversationSchema = new mongoose.Schema({
  conversation: Array,
  key: String,
});

let conversationModel =
  mongoose.models.conversationModel ||
  mongoose.model("conversationModel", conversationSchema);

export default conversationModel;

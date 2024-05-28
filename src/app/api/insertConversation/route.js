import mongoose from "mongoose";
import conversationModel from "@/models/conversation";

const handler = async (req) => {
  const { content, key } = await req.json();
  console.log(content, key);
  mongoose.connect(process.env.MONGO_URL, {
    dbName: "gemini",
  });
  conversationModel.insertMany([{ conversation: content }]);
  return new Response({ status: "Success" });
};

export { handler as POST };

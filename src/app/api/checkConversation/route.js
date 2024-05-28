import mongoose from "mongoose";
import conversationModel from "@/models/conversation";

const handler = async (req) => {
  const { content, key } = await req.json();
  let response = {};
  console.log(content, key);
  mongoose.connect(process.env.MONGO_URL, {
    dbName: "gemini",
  });
  await conversationModel.find({ key: key }).then((conversations) => {
    if (conversations.length > 0) {
      response = {
        status: "success",
        conversation: conversations[0].conversation,
      };
    } else {
      conversationModel.insertMany([
        {
          conversation: [],
          key: key,
        },
      ]);
    }
  });
  return new Response(response);
};

export { handler as POST };

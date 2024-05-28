import conversationModel from "@/models/conversation";

function createConversation(content) {
  conversationModel.insertMany([
    {
      conversation: content,
    },
  ]);
}

export { createConversation };

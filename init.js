const mongoose = require("mongoose");
const Chat = require("./modals/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

}

let allChats = [
    {
    from: "amrits",
    to: "riya",
    msg: "send me your book",
    created_at: new Date(),
    updated_at: new Date(),
    },

    {
    from: "akamit",
    to: "eiya",
    msg:  "your exam sheets",
    created_at: new Date(),
    updated_at: new Date(),
    },

    {
    from: "hamenat",
    to: "prad",
    msg: "send me your exam sheets",
    created_at: new Date(),
    updated_at: new Date(),
    },

    {
      from: "amit",
      to: "goli",
      msg: "please help me to do this",
      created_at: new Date(),
      updated_at: new Date(),
    }
];

Chat.insertMany(allChats);
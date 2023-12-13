const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sushmalb:Sushm%4014@cluster0.ptg1vhv.mongodb.net/e-commerce"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err.mesage);
  });

mongoose.connection.on("connected", () => {
  console.log("mongoose connected to db");
});

mongoose.connection.on("error", (err) => {
  console.log("err.mesage");
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoose disconnected from db");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

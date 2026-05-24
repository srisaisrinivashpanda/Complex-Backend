import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

dotenv.config({
  path: ".env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo db connection failed !!!", error);
  });

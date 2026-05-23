import dotenv from "dotenv";
import connectDB from "./db/index.js";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

dotenv.config({
  path: ".env",
});

connectDB();

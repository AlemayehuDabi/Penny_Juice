import express from "express";
import dotenv from "dotenv";
import { auth } from "./utilis/auth";
import { toNodeHandler } from "better-auth/node";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// app.all("/api/auth/*", toNodeHandler(auth)); // For ExpressJS v4
app.all("/api/auth/*splat", toNodeHandler(auth)); //For ExpressJS v5

// Mount express json middleware after Better Auth handler
// or only apply it to routes that don't interact with Better Auth

app.use(express.json());

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.get("/users", async (_req, res) => {
  const users = await prisma.user.findMany();

  return res.json(users);
});

app.post("/users", async (req, res) => {
  await prisma.user.create({ data: req.body });

  return res.json(200);
});

app.listen(4000, () => console.log("server is listening on port 4000"));

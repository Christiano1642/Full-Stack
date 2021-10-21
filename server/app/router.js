import Router from "express";
import client from "./db/comms/clients.js";
import config from "../config.js";

const router = new Router();
const {
  db: { name, collectionName: collection },
} = config;

router.get("/", (_, res) => {
  res.send("Hello form API router!");
});
router.get("/products", async (_, res) => {
  const products = await client.db(name).collection(collection).find({});
  res.json(products);
});

router.get("/pr")

export default router;

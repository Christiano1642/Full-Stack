import Router from "express";
import config from "../config.js";
import client from "./db/comms/clients.js";

const collection = client.db(config.db.name).collection(config.db.collection)

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

router.get("/products", async(_,res) =>) {
  const products = await collection.find().toArray();
  res.json(products);
});


router.get("/products/:id", async (req, res) =>{
  const product = await collection.findOne({_id: ObjectId(req.params.id)});
  res.json(product);
});

router.post("/products", async (req, res) =>{
  const createdProduct = await collection.insertOne(req.body)
  res.json(createdProduct);
}
export default router;

import once from "./comms/once.js";
import products from "./data.js";
import config from "../config.js";

const {
  db: { name, collectionName: collection },
} = config;
(async () => {
  const conn = await once.connect();
  await conn.db(name).collection(collection).deleteMany({});
  await conn.db(name).collection(collection).insertMany(products);
  conn.close();
})();

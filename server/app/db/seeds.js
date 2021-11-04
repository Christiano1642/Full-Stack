import once from "./comms/once.js";
import productsData from "./data.js";
import config from "../config.js";

const {
  db: { name,  collection },
} = config;
(async () => {
  const conn = await once.connect();
  await conn.db(name).collection(collection).deleteMany({});
  await conn.db(name).collection(collection).insertMany(productsData);
  conn.close();
})();

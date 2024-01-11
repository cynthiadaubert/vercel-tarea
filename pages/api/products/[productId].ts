import type { NextApiRequest, NextApiResponse } from "next";
import * as methods from "micro-method-router";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const product = req.query.productId;
    res.send("soy el get, productId " + product); //solamente podemos pasar un string o un array de strings
  },
});

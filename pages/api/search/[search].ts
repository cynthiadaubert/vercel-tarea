import type { NextApiRequest, NextApiResponse } from "next";
import * as methods from "micro-method-router";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    // Handle PATCH request logic for updating user data
    res.status(200).json({ message: "success" });
  },
});

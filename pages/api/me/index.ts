/* export default function nombre(req, res) {
  const nombre: string = "Pepa";
  res.send(nombre);
} */

//info del user asociado al token
import type { NextApiRequest, NextApiResponse } from "next";
import * as methods from "micro-method-router";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    res.send("Patata");
  },

  async patch(req: NextApiRequest, res: NextApiResponse) {
    // Handle PATCH request logic for updating user data
    res.status(200).json({ message: "Name updated successfully" });
  },
});

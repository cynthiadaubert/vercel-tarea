import type { NextApiRequest, NextApiResponse } from "next";
import * as methods from "micro-method-router";

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    res.send("soy el auth");
  },
});

/* export default function pep(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    res.status(200).send("auth POST");
  } else if (req.method == "GET") {
    res.status(200).send("auth get");
  } else if (req.method == "PUT") {
    res.status(200).send("auth PUT");
  } else {
    res.status(405).send("METHOD NOT ALLOWED");
  }
} */

import express, { Router } from "express";
import cors from "cors";

const app = express();
const port = 3090;

app.use(cors());

const router: Router = Router();

router.get("/", (req, res) => {
  res.send({
    texto: ["Bolsonaro", "sla", "opa"],
  });
});

router.post("/teste",async (req, res) => {
  const count = req.query;
  console.log(count);
  res.send("ok");
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

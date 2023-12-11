import express, { Router } from "express";
import cors from "cors";
import mysql from "mysql2";
// get the client

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fundacao",
});

// // simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );

const app = express();
const port = 3090;

app.use(cors());

app.use(express.json());

const router: Router = Router();

router.get("/", async (req, res) => {
  const result = await connection.promise().query("SELECT * FROM Pessoa");
  res.send(result[0]);
});

router.post("/", async (req, res) => {
  const result = await connection
    .promise()
    .query(
      `INSERT INTO fundacao.pessoa (nome, idade) VALUES ('POST', ${req.body.numero})`
    );
  console.log(req.body.numero);
  res.send("ok");
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

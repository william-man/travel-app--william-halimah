import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the server file
const __dirname = path.dirname(__filename); // get the name of the directory

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("pages/home/index", {
    title: "",
  });
});
app.get("/flights", (req, res) => {
  res.render("pages/flights", {
    title: "",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

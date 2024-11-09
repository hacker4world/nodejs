import "reflect-metadata";

import express from "express";
import bodyParser from "body-parser";
import { AppDataSource } from "./database.js";
import { createEmployee } from "./handlers/createEmployee.js";
import { getUser } from "./handlers/getEmployee.js";
import { updateEmployee } from "./handlers/updateEmployee.js";
import { deleteUser } from "./handlers/deleteEmployee.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/create", createEmployee);

app.get("/user/:id", getUser);

app.put("/user/update/:id", updateEmployee);

app.delete("/user/delete/:id", deleteUser);

AppDataSource.initialize().then(function () {
  console.log("Database connected");

  app.listen(4000, function () {
    console.log("Application started");
  });
});

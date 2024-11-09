import { Request, Response } from "express";
import { User } from "../entity/User.js";
import { AppDataSource, userRepository } from "../database.js";

export function createEmployee(request: Request, response: Response): void {
  const data = request.body;

  const newUser: User = new User(data.firstName, data.lastName, data.age);

  userRepository.save(newUser);

  response.send("user has been created");
}

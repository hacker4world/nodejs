import { Request, Response } from "express";
import { userRepository } from "../database.js";
import { User } from "../entity/User.js";

export async function updateEmployee(
  request: Request,
  response: Response
): Promise<void> {
  const id = parseInt(request.params.id);
  const name: string = request.body.firstName;

  const user = await userRepository.findOneBy({
    id: id,
  });

  if (user == null) response.send("id incorrect");
  else {
    user.firstName = name;
    userRepository.save(user);
    response.send("firstname updated.");
  }
}

import { Request, Response } from "express";
import { userRepository } from "../database.js";

export async function deleteUser(
  request: Request,
  response: Response
): Promise<void> {
  const id = parseInt(request.params.id);
  await userRepository.delete({ id: id });
  response.send("user deleted");
}

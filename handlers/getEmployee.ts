import { Request, Response } from "express";
import { userRepository } from "../database.js";

export async function getUser(
  request: Request,
  response: Response
): Promise<void> {
  const id = parseInt(request.params.id);

  const user = await userRepository.findOneBy({
    id: id,
  });

  response.json(user);
}

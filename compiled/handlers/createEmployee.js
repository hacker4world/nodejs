import { User } from "../entity/User.js";
import { userRepository } from "../database.js";
export function createEmployee(request, response) {
    const data = request.body;
    const newUser = new User(data.firstName, data.lastName, data.age);
    userRepository.save(newUser);
    response.send("user has been created");
}

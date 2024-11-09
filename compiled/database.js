import { DataSource } from "typeorm";
import { User } from "./entity/User.js";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});
export const userRepository = AppDataSource.getRepository(User);

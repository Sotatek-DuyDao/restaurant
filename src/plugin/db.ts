import "reflect-metadata";
import { DataSource, Repository } from "typeorm";
import { Role } from "../entiry/role";
import { FastifyInstance } from "fastify";

export interface Models {
  role: Repository<Role>;
}
export interface db {
  models: Models;
}
export default async (
  fastify: FastifyInstance,
  opts: any,
  done: () => void
) => {
  const connection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "retaurant",
    synchronize: true,
    logging: true,
    entities: [Role],
  });

  // this object will be accessible from any fastify server instance
  fastify.decorate("db", {
    role: connection.getRepository(Role),
  });
  done();
};

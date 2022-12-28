import { FastifyInstance } from "fastify";
import { RoleRouter } from "../role/role.router";

const InitRoute = (fastify: FastifyInstance) => {
  fastify.register(RoleRouter, {
    prefix: "/role",
  });
};
export default InitRoute;

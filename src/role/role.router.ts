import { FastifyInstance } from "fastify";
import routeController from "./role.controller";
import { createRoleValidation } from "./validation";

export const RoleRouter = (
  fastify: FastifyInstance,
  opts: any,
  done: (err?: Error) => void
) => {
  fastify.post(
    "",
    {
      schema: {
        body: createRoleValidation,
      },
    },
    routeController.createRole
  );
  done();
};

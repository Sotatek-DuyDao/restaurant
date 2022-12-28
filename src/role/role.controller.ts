import { FastifyReply, FastifyRequest } from "fastify";

class RoleController {
  async createRole(req: FastifyRequest, res: FastifyReply) {
    req.log.info(req.body);

    return req.body;
  }
}
export default new RoleController();

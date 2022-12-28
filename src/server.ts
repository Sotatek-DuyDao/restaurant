import Fastify, { FastifyInstance } from "fastify";
import InitRoute from "./routes";
import InitDb from "./plugin/db";
const fastify = Fastify({
  logger: true,
});
InitRoute(fastify);
fastify.register(InitDb);
fastify.listen({ port: 3000 }).then(() => fastify.log.info("Server started"));

import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";

import {
	jsonSchemaTransform,
	serializerCompiler,
	validatorCompiler,
	ZodTypeProvider,
} from "fastify-type-provider-zod";
import loginRoute from "./routes/login.js";

const app = fastify();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifySwagger, {
	mode: "dynamic",
	openapi: {
		info: {
			title: "SampleApi",
			description: "Sample backend service",
			version: "1.0.0",
		},
	},
	transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUI, {
	routePrefix: "/documentation",
});

await app.after();

export const tFastify = app.withTypeProvider<ZodTypeProvider>();

loginRoute(tFastify);

await app.ready();

await app.listen({
	port: 4949,
});

console.log(`Documentation running at http://localhost:4949/documentation`);

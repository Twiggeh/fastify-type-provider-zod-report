import { z } from "zod";
import { tFastify } from "../app.js";
import { accessToken, registeredClient } from "../shared/wireAPI.js";

const LOGIN_SCHEMA = z.object({
	username: z.string().max(32).describe("Some description for username"),
	token: accessToken,
	password: z.string().max(32),
});

const loginResponse = z.object({
	username: z.string().max(32).describe("Some description for username"),
	login: accessToken,
	token: accessToken,
	clients: registeredClient.array(),
	password: z.string().max(32),
});

export default (fastify: typeof tFastify) =>
	fastify.route({
		method: "POST",
		url: "/login",
		schema: { body: LOGIN_SCHEMA, response: { 200: loginResponse } },
		handler: (req, res) => {
			res.send({
				password: "",
				clients: [],
				token: {
					access_token: "",
					expires_in: 100,
					token_type: "Bearer",
					user: "",
				},
				login: {
					access_token: "",
					expires_in: 100,
					token_type: "Bearer",
					user: "",
				},
				username: "",
			});
		},
	});

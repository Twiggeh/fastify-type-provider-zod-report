import { z } from "zod";

export const accessToken = z.object({
	access_token: z.string(),
	expires_in: z.number(),
	user: z.string(),
	token_type: z.literal("Bearer"),
});

export const registeredClient = z.object({
	class: z.union([
		z.literal("desktop"),
		z.literal("legalhold"),
		z.literal("phone"),
		z.literal("tablet"),
	]),
	id: z.string(),
	cookie: z.string().optional(),
	address: z.string().optional(),
	label: z.string().optional(),
	location: z
		.object({
			lat: z.number(),
			lon: z.number(),
		})
		.optional(),
	model: z.string().optional(),
	time: z.string().describe("An ISO 8601 Date string "),
	type: z.literal("permanent").or(z.literal("temporary")),
});

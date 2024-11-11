
import z from "zod";

const envSchema = z.object({
    AUTH_SECRET: z.string(),
    PORT: z.coerce.number().default(3333)
})

export const env = envSchema.parse(process.env)
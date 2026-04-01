import { services } from "@/data/services-offered";
import z from "zod";

export const contactRouteSearchSchema = z.object({
  service: z
    .enum(services.map((s) => s.title))
    .optional()
    .catch(""),
});

export type ContactRouteSearchSchema = z.infer<typeof contactRouteSearchSchema>;

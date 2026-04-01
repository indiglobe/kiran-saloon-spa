import z from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  email: z.email({ message: "Email is required" }),
  phone: z
    .string()
    .length(10, { message: "Phone no has to be exactly 10 digit." }),
  service: z.string().min(1, { message: "Service is required" }),
  message: z.string().superRefine((value, ctx) => {
    if (value.length > 1 && value.length < 10)
      ctx.addIssue({
        code: "custom",
        message: "Message must be atleast 10 character.",
        path: ["message"],
      });
  }),
});

export type ConstactFormSchema = z.infer<typeof contactFormSchema>;

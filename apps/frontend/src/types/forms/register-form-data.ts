import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha com mínimo de 6 caracteres"),
  confirmPassword: z.string().min(6, "Senha com mínimo de 6 caracteres"),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;

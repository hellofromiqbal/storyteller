import { z } from 'zod';

export const registerFormSchema = z.object({
  firstName: z.string({
    required_error: "First name is required.",
    invalid_type_error: "First name must be a string."
  }).min(2, { message: "First name must be at least 2 or more characters long."}).max(15, { message: "First name must be 15 or fewer characters long."}),
  lastName: z.string({
    required_error: "Last name is required.",
    invalid_type_error: "Last name must be a string."
  }).min(2, { message: "Last name must be at least 2 or more characters long."}).max(15, { message: "Last name must be 15 or fewer characters long."}),
  email: z.string({
    required_error: "Email is required.",
    invalid_type_error: "Email must be a string."
  }).email({ message: "Email must be a valid email address." }),
  password: z.string({
    required_error: "Password is required.",
    invalid_type_error: "Password must be a string."
  }).min(8, { message: "Password must be at least 8 or more characters long." }),
  confirmPassword: z.string({
    required_error: "Confirm password is required.",
    invalid_type_error: "Confirm password must be a string."
  }).min(8, { message: "Confirm password must be at least 8 or more characters long." }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords must match.",
  path: ["confirmPassword"],
});

export const loginFormSchema = z.object({
  email: z.string({
    required_error: "Email is required.",
    invalid_type_error: "Email must be a string."
  }).email({ message: "Email must be a valid email address." }),
  password: z.string({
    required_error: "Password is required.",
    invalid_type_error: "Password must be a string."
  }),
});
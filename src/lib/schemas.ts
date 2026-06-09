import { z } from "zod";

const name = z
  .string()
  .trim()
  .min(1, "Name required")
  .max(100, "Too long");
const email = z
  .string()
  .trim()
  .email("Invalid email")
  .max(255, "Too long");
const phone = z
  .string()
  .trim()
  .min(7, "Phone required")
  .max(30, "Too long")
  .regex(/^[0-9+\-()\s.]+$/, "Digits only");
const message = z.string().trim().min(1, "Required").max(1000, "Too long");
const short = z.string().trim().min(1, "Required").max(120, "Too long");

export const buySchema = z.object({
  name,
  location: short,
  capital: short,
  timeline: short,
});

export const sellSchema = z.object({
  address: short,
  bracket: short,
  timeline: short,
});

export const contactGeneralSchema = z.object({
  name,
  email,
  phone,
  message,
});

export const contactCallSchema = z.object({
  name,
  phone,
  preferred: short,
  channel: short,
});

export const vaultSchema = z.object({
  neighborhood: short,
});

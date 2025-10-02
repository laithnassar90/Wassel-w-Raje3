import { z } from 'zod';

// Login form validation
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

// Register form validation
export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

// Find ride form validation
export const findRideSchema = z.object({
  from: z.string().min(1, 'From location is required'),
  to: z.string().min(1, 'To location is required'),
  date: z.string().min(1, 'Date is required'),
  passengers: z.number().min(1, 'At least 1 passenger').max(8, 'Maximum 8 passengers')
});

// Offer ride form validation
export const offerRideSchema = z.object({
  from: z.string().min(1, 'From location is required'),
  to: z.string().min(1, 'To location is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  seats: z.number().min(1, 'At least 1 seat').max(8, 'Maximum 8 seats'),
  price: z.number().min(0, 'Price must be positive')
});

export type LoginForm = z.infer<typeof loginSchema>;
export type RegisterForm = z.infer<typeof registerSchema>;
export type FindRideForm = z.infer<typeof findRideSchema>;
export type OfferRideForm = z.infer<typeof offerRideSchema>;
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Mock user data
const mockUser = {
  id: 1,
  name: "Test User",
  email: "test@example.com",
};

// Mock login function
export const login = async (email, password) => {
  console.log(`Attempting to log in with email: ${email} and password: ${password}`)
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (email === 'test@example.com' && password === 'password') {
    const user = { ...mockUser, token: 'fake-jwt-token' };
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } else {
    throw new Error('Invalid credentials');
  }
};

// Mock logout function
export const logout = () => {
  localStorage.removeItem('user');
};

// Get current user from local storage
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};

export default api;

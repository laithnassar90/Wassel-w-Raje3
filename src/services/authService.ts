interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  name: string;
  phone?: string;
}

class AuthService {
  private user: User | null = null;

  async login(credentials: LoginCredentials): Promise<User> {
    // Mock implementation - replace with real API
    const mockUser: User = {
      id: '1',
      email: credentials.email,
      name: 'John Doe',
      phone: '+962791234567'
    };
    
    this.user = mockUser;
    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
  }

  async register(data: RegisterData): Promise<User> {
    // Mock implementation - replace with real API
    const newUser: User = {
      id: Date.now().toString(),
      email: data.email,
      name: data.name,
      phone: data.phone
    };
    
    this.user = newUser;
    localStorage.setItem('user', JSON.stringify(newUser));
    return newUser;
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('user');
  }

  getCurrentUser(): User | null {
    if (!this.user) {
      const stored = localStorage.getItem('user');
      this.user = stored ? JSON.parse(stored) : null;
    }
    return this.user;
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
}

export const authService = new AuthService();
export type { User, LoginCredentials, RegisterData };
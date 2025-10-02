// Authentication Service
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

class AuthService {
  private tokenKey = 'wassel_token';
  private userKey = 'wassel_user';

  async login(email: string, password: string): Promise<AuthResponse> {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = {
      user: { id: '1', name: 'John Doe', email },
      token: 'mock-jwt-token'
    };
    
    this.setAuth(response);
    return response;
  }

  async register(userData: { name: string; email: string; password: string }): Promise<AuthResponse> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = {
      user: { id: Date.now().toString(), name: userData.name, email: userData.email },
      token: 'mock-jwt-token'
    };
    
    this.setAuth(response);
    return response;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): User | null {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private setAuth(auth: AuthResponse): void {
    localStorage.setItem(this.tokenKey, auth.token);
    localStorage.setItem(this.userKey, JSON.stringify(auth.user));
  }
}

export const authService = new AuthService();
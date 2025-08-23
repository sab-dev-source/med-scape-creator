import { getApiUrl } from "@/utils/getUrl";
export const loginUser = async (email: string, password: string) => {
    const response = await fetch(`${getApiUrl()}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    return response.json();
  };
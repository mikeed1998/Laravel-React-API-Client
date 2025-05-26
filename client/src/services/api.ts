// src/services/api.ts
const API_URL = import.meta.env.VITE_API_URL || '/api';

interface ApiResponse<T = any> {
  status: string;
  data?: T;
  message?: string;
}

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return {
      status: 'error',
      message: (error as Error).message,
    };
  }
}
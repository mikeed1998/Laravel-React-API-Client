const isDevelopment = import.meta.env.DEV;
const API_BASE_URL = isDevelopment
  ? 'http://localhost:8000/api/v1'  // Desarrollo
  : 'https://michcvdev.com/api_sistemas/api/v1'; // Producción

interface ApiResponse<T = any> {
  message: string;
  data: T;
}

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    console.log('Fetching URL:', url); // Para depuración

    const response = await fetch(url, {
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
    throw error;
  }
}
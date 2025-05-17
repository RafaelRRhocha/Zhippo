const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
    'User-Agent': 'Aplicação (email para contato técnico)',
  },
};

class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

type ApiResponse<T = unknown> = {
  data: T;
  status: number;
};

type RequestOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: HeadersInit;
  body?: unknown;
};

export class HttpClient {
  private baseUrl: string = API_CONFIG.baseUrl || '';

  private async request<T>(
    endpoint: string,
    options: RequestOptions,
  ): Promise<ApiResponse<T>> {
    const isLocalEndpoint = endpoint.startsWith('/api/');
    const url = isLocalEndpoint ? endpoint : this.baseUrl + endpoint;

    const { method, headers = {}, body } = options;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          ...(!isLocalEndpoint ? API_CONFIG.headers : {}),
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new ApiError(
          response.status,
          data.error || 'Ocorreu um erro na requisição',
        );
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, 'Erro interno do servidor');
    }
  }

  public get<T>(endpoint: string, headers?: HeadersInit) {
    return this.request<T>(endpoint, { method: 'GET', headers });
  }

  public post<T>(endpoint: string, body: unknown, headers?: HeadersInit) {
    return this.request<T>(endpoint, { method: 'POST', body, headers });
  }

  public put<T>(endpoint: string, body: unknown, headers?: HeadersInit) {
    return this.request<T>(endpoint, { method: 'PUT', body, headers });
  }

  public delete<T>(endpoint: string, headers?: HeadersInit) {
    return this.request<T>(endpoint, { method: 'DELETE', headers });
  }
}

export const apiClient = new HttpClient();

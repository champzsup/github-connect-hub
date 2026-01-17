import { useState, useCallback } from 'react';
import api from '@/services/api';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (
      method: 'get' | 'post' | 'put' | 'patch' | 'delete',
      endpoint: string,
      body?: unknown
    ) => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      let response;
      switch (method) {
        case 'get':
          response = await api.get<T>(endpoint, body as Record<string, string>);
          break;
        case 'post':
          response = await api.post<T>(endpoint, body);
          break;
        case 'put':
          response = await api.put<T>(endpoint, body);
          break;
        case 'patch':
          response = await api.patch<T>(endpoint, body);
          break;
        case 'delete':
          response = await api.delete<T>(endpoint);
          break;
      }

      setState({
        data: response.data,
        loading: false,
        error: response.error,
      });

      return response;
    },
    []
  );

  return { ...state, execute };
}

export default useApi;

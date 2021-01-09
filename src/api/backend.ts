import i18next from 'i18next';

export class BackendError extends Error {
  name = 'BackendError';

  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    Object.setPrototypeOf(this, BackendError.prototype);
    this.statusCode = statusCode;
  }
}

export class G8Error extends BackendError {
  name = 'G8Error';

  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message, statusCode);
    Object.setPrototypeOf(this, G8Error.prototype);
  }
}

const DefaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  // 'X-XSRF-TOKEN': localStorage.getItem('XSRF-TOKEN'),
};

export const backendBasePath = '/faceless/pwa/1';

const shortDatePattern = /^\d{4}-[01]\d-[0-3]\d$/;
const iso8601DatePattern = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/;

/**
 * Reviver that is used in JSON.parse(input, dateReviver)
 * @param key string object key that identifies the current property
 * @param value unknown the object value
 */
function dateReviver(key: string, value: unknown) {
  if (typeof value !== 'string') return value;
  if (!value) return value;
  if (value.length < 9 || value.length > 40) return value;
  if (!shortDatePattern.test(value) && !iso8601DatePattern.test(value)) return value;
  return new Date(value);
}

export async function fetchJson<T = unknown>(
  path: string,
  { method = 'get', headers = {}, ...options }: RequestInit = {}
): Promise<T> {
  // console.log('Backend could request', path, 'with Accept-Language:', i18next.language);
  try {
    const res = await fetch(path, {
      method,
      credentials: 'same-origin', // Needed by Safari 11.1
      headers: {
        ...DefaultHeaders,
        'Accept-Language': i18next.language,
        ...headers,
      },
      ...options,
    });
    const text = await res.text();
    if (!res.ok) {
      if (res.status === 503 && res.headers.has('X-G8-Token')) {
        window.location.href = '/g8';
        throw new G8Error(text || res.statusText, res.status);
      }
      throw new BackendError(text || res.statusText, res.status);
    }
    if (text) return JSON.parse(text, dateReviver) as T;
    return text as any;
  } catch (error) {
    // Maybe add a logger

    // Try to parse any JSON messages contained in the message property
    try {
      if (error.message) {
        const { message } = JSON.parse(error.message);
        error.message = message;
      }
    } catch (e) {
      /* ignore */
    }

    throw error;
  }
}

export async function del<T = unknown>(path: string, options?: RequestInit) {
  return fetchJson<T>(`${backendBasePath}${path}`, { ...options, method: 'DELETE' });
}

export async function get<T = unknown>(path: string, options?: RequestInit) {
  return fetchJson<T>(`${backendBasePath}${path}`, { ...options, method: 'GET' });
}

export async function head(path: string, options?: RequestInit) {
  return fetchJson<void>(`${backendBasePath}${path}`, { ...options, method: 'HEAD' });
}

export async function options<T = unknown>(path: string, options?: RequestInit) {
  return fetchJson<T>(`${backendBasePath}${path}`, { ...options, method: 'OPTIONS' });
}

export async function patch<T = unknown>(path: string, options?: RequestInit) {
  return fetchJson<T>(`${backendBasePath}${path}`, { ...options, method: 'PATCH' });
}

export async function post<T = unknown>(path: string, options?: RequestInit) {
  return fetchJson<T>(`${backendBasePath}${path}`, { ...options, method: 'POST' });
}

export async function put<T = unknown>(path: string, options?: RequestInit) {
  return fetchJson<T>(`${backendBasePath}${path}`, { ...options, method: 'PUT' });
}

export const Backend = {
  del,
  get,
  head,
  options,
  patch,
  post,
  put,
  fetchJson,
};

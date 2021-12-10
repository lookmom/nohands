export class BackendError extends Error {
  name = 'BackendError';

  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    Object.setPrototypeOf(this, BackendError.prototype);
    this.statusCode = statusCode;
  }
}

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

class Backend {
  protected static defaultHeaders: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    // 'X-XSRF-TOKEN': localStorage.getItem('XSRF-TOKEN'),
    // 'Authorization': 'Bearer ' + localStorage.getItem('clientToken'),
  };

  static backendBasePath = '/faceless/pwa/1';

  static patchDefaultHeader(headers: HeadersInit) {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      ...headers,
    };
  }

  static replaceDefaultHeader(headers: HeadersInit) {
    this.defaultHeaders = {
      ...headers,
    };
  }

  static getDefaultHeader() {
    return { ...this.defaultHeaders };
  }

  /**
   * Sends a low-level fetch request with pre-configured default headers
   */
  static async fetchJson<T = unknown>(
    path: string,
    { method = 'get', headers = null, ...options }: RequestInit = {}
  ): Promise<T> {
    try {
      const res = await fetch(path, {
        method,
        credentials: 'same-origin', // Needed by Safari 11.1
        headers: {
          ...this.defaultHeaders,
          // 'Accept-Language': currentLanguage,
          ...headers,
        },
        ...options,
      });
      const text = await res.text();
      if (!res.ok) {
        throw new BackendError(text || res.statusText, res.status);
      }
      if (text) return JSON.parse(text, dateReviver) as T;
      return text as any;
    } catch (error) {
      // Try to parse any JSON messages contained in the message property
      try {
        if (error.message) {
          const { message } = JSON.parse(error.message);
          error.message = message;
        }
      } catch (e) {
        /* ignore unparseable JSON error */
      }

      throw error;
    }
  }

  /**
   * Provides a slim request without any response body to check meta information of an endpoint (e.g. headers)
   */
  static async head(path: string, options?: RequestInit) {
    return this.fetchJson<void>(`${this.backendBasePath}${path}`, { ...options, method: 'HEAD' });
  }

  /**
   * Deletes an existing resource
   */
  static async del<T = unknown>(path: string, options?: RequestInit) {
    return this.fetchJson<T>(`${this.backendBasePath}${path}`, { ...options, method: 'DELETE' });
  }

  /**
   * Reads an existing resource
   * Attention: no request body available, use URLSearchParams instead
   */
  static async get<T = unknown>(path: string, options?: RequestInit) {
    return this.fetchJson<T>(`${this.backendBasePath}${path}`, { ...options, method: 'GET' });
  }

  /**
   * Fetch meta information about an endpoint (e.g. which HTTP-verbs are available)
   */
  static async options<T = unknown>(path: string, options?: RequestInit) {
    return this.fetchJson<T>(`${this.backendBasePath}${path}`, { ...options, method: 'OPTIONS' });
  }

  /**
   * Partially update an existing resource
   */
  static async patch<T = unknown>(path: string, options?: RequestInit) {
    return this.fetchJson<T>(`${this.backendBasePath}${path}`, { ...options, method: 'PATCH' });
  }

  /**
   * Create a new resource
   */
  static async post<T = unknown>(path: string, options?: RequestInit) {
    return this.fetchJson<T>(`${this.backendBasePath}${path}`, { ...options, method: 'POST' });
  }

  /**
   * Replace an existing resource
   */
  static async put<T = unknown>(path: string, options?: RequestInit) {
    return this.fetchJson<T>(`${this.backendBasePath}${path}`, { ...options, method: 'PUT' });
  }
}

export default Backend;

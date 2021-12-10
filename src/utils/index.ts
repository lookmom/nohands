import React, { DependencyList } from 'react';

import { logger } from './logger';

export async function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function noop() {
  return;
}

interface LazyReturn<T> {
  isInitialized: boolean;
  isLoading: boolean;
  reload: () => void;
  error: Error;
  data: T;
  abort: () => void;
}
/**
 * Lets you map async results into lazy return values
 * @returns LazyReturn<T>
 */
export function useLazy<T>(fn: (signal: AbortSignal) => Promise<T>, dependencies: DependencyList = []): LazyReturn<T> {
  const isMounted = useMounted();
  const abortController = React.useRef<AbortController>();
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState<Error>();
  const [isLoading, setIsLoading] = React.useState(false);

  const reload = React.useCallback(async () => {
    if (abortController.current) abortController.current.abort();
    abortController.current = new AbortController();
    try {
      setError(null);
      setIsLoading(true);
      const response = await fn(abortController.current.signal);
      if (isMounted.current) setData(response);
      if (isMounted.current) setIsInitialized(true);
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return;
      if (isMounted.current) setError(e);
      if (isMounted.current) setData(null);
      logger.warn(e);
    } finally {
      if (isMounted.current) setIsLoading(false);
    }
  }, dependencies);

  // Load on componentDidMount, and whenever the reload-method changes
  React.useEffect(() => void reload(), [reload]);

  return { isInitialized, isLoading, reload, error, data, abort: abortController.current?.abort ?? noop };
}

const useMounted = () => {
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  });
  return isMounted;
};

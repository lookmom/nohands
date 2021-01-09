import React from 'react';

export async function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function useAsyncResult<S = undefined>(asyncFunction: () => Promise<S>, dependencies: React.DependencyList = []): [boolean, S] {
  const [loading, setLoading] = React.useState(false);
  const [state, setState] = React.useState<S | null>();
  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setState(await asyncFunction());
      } finally {
        setLoading(false);
      }
    })();
  }, dependencies);

  return [loading, state];
}

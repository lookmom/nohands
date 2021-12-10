import { noop } from './index';

interface Logger {
  log(...data: any[]): void;
  info(...data: any[]): void;
  error(...data: any[]): void;
  warn(...data: any[]): void;
}

export let logger: Logger = {
  log: noop,
  info: noop,
  error: noop,
  warn: noop,
};

if (process.env.NODE_ENV === 'development') {
  logger = console;
}

import LogEnum from '~/logger/enums/log.enum.ts';

export interface LoggerInterface {
  silly(message: string, extra?: Record<string | symbol, any>): void
  trace(message: string, extra?: Record<string | symbol, any>): void
  debug(message: string, extra?: Record<string | symbol, any>): void
  info(message: string, extra?: Record<string | symbol, any>): void
  warn(message: string, extra?: Record<string | symbol, any>): void
  error(message: string, extra?: Record<string | symbol, any>): void
  fatal(message: string, extra?: Record<string | symbol, any>): void

  emit(level: LogEnum, message: string, extra?: Record<string | symbol, any>): void
}

export default {}
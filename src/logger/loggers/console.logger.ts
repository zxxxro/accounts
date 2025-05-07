import type { LoggerInterface } from '~/logger/interfaces.ts';

import { Singleton } from '@zxxxro/commons';
import LogEnum from '~/logger/enums/log.enum.ts';

@Singleton()
export class Console implements LoggerInterface {
  silly(message: string, extra?: Record<string | symbol, any>): void {
    console.log(message, extra || '')
  }
  trace(message: string, extra?: Record<string | symbol, any>): void {
    console.trace(message, extra || '')
  }
  debug(message: string, extra?: Record<string | symbol, any>): void {
    console.debug(message, extra || '')
  }
  info(message: string, extra?: Record<string | symbol, any>): void {
    console.info(message, extra || '')
  }
  warn(message: string, extra?: Record<string | symbol, any>): void {
    console.warn(message, extra || '')
  }
  error(message: string, extra?: Record<string | symbol, any>): void {
    console.error(message, extra || '')
  }
  fatal(message: string, extra?: Record<string | symbol, any>): void {
    console.error(message, extra || '')
  }
  emit(level: LogEnum, message: string, extra?: Record<string | symbol, any>): void {
    this[level](message, extra)
  }
}

export default Console
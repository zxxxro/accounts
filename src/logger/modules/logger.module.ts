import { Module } from '@zxxxro/anemics';
import LoggerInterceptor from '~/logger/interceptors/logger.interceptor.ts';
import Console from '~/logger/loggers/console.logger.ts';

@Module({
  interceptors: [
    LoggerInterceptor
  ],
  providers: [
    {
      name: 'Logger',
      target: Console
    }
  ]
})
export class LoggerModule {
  constructor() {}
}

export default LoggerModule
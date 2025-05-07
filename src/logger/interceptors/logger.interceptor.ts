import type { LoggerInterface } from '~/logger/interfaces.ts';

import { format } from '@std/datetime'
import { Consumer } from '@zxxxro/commons';
import { ContextType, EndpointType, InterceptorInterface, Intercept } from '@zxxxro/anemics';

import LogEnum from '~/logger/enums/log.enum.ts';

@Consumer()
@Intercept('finally')
export class LoggerInterceptor implements InterceptorInterface {

  constructor(public logger: LoggerInterface) {}

  async onUse<T>(context: ContextType<T & EndpointType>): Promise<void> {

    let level: LogEnum = LogEnum.INFO
    const status = context.responser.status || 200

    if (status < 200 || status >= 300) {
      level = LogEnum.WARN
    }

    if (status >= 500) {
      level = LogEnum.ERROR
    }

    this.logger[level](
      `[${format(new Date(), 'yyyy-mm-dd HH:mm:ss.S')}] ${context.traceId} ${context.requester.method} ${context.requester.url}`
    )
  }
}

export default LoggerInterceptor
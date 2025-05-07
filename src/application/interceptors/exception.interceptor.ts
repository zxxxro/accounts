import { ContextType, EndpointType, InterceptorInterface, Intercept } from '@zxxxro/anemics';
import ValidationException from '~/validator/exceptions/Validation.exception.ts';

@Intercept('catch')
export class ExceptionInterceptor implements InterceptorInterface {
  async onUse<T>(context: ContextType<T & EndpointType>): Promise<void> {
    
    context.responser.setStatus(500)
    context.responser.setBody(context.responser.metadata.error.context)

    if (context.responser.metadata.error instanceof ValidationException) {
      context.responser.setStatus(400)
      context.responser.setHeader('Content-Type', 'application/json')
      context.responser.setBody(JSON.stringify(context.responser.metadata.error.context))
    }
  }
}

export default ExceptionInterceptor
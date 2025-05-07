import { ContextType, EndpointType, InterceptorInterface, Intercept } from '@zxxxro/anemics';
import { Objector, ValidationEnum } from '@zxxxro/commons';
import ValidationException from '~/validator/exceptions/Validation.exception.ts';
import Response from '~/application/services/Response.service.ts';

@Intercept('then', 1)
export class ValidationInterceptor implements InterceptorInterface {
  async onUse<T>(context: ContextType<T & EndpointType>): Promise<void> {
    if (context.extra) {
      if (context.responser.metadata.model) {
        const onlyInvalids = [
          ValidationEnum.INVALID,
          ValidationEnum.UNGUARDED,
          ValidationEnum.EXCEPTION,
          ValidationEnum.ERROR,
        ];

        const validations = await Objector.validateProperties(context.responser.metadata.model, onlyInvalids);

        if (validations) {
          throw new ValidationException('The request is invalid', {
            key: 'EXCEPTION',
            context: new Response('VALIDATION', 'EXCEPTION', validations),
            cause: 'The validation of a request property returned invalid'
          });
        }
      }
    }
  }
}

export default ValidationInterceptor
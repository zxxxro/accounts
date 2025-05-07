import { Exception } from '@zxxxro/commons';

export class ValidationException extends Exception<'EXCEPTION'> {
  declare context?: Record<string | symbol, any>;
}

export default ValidationException
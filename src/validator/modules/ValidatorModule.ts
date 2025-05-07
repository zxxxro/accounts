import { Module } from '@zxxxro/anemics';

import ValidationInterceptor from '~/validator/interceptors/validation.interceptor.ts';

@Module({
  interceptors: [
    ValidationInterceptor
  ]
})
export class ValidatorModule {}

export default ValidatorModule
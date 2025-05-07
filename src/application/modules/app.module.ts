import { Module, RouterInterceptor } from '@zxxxro/anemics';

import ExceptionInterceptor from '~/application/interceptors/exception.interceptor.ts';
import LoggerModule from '~/logger/modules/logger.module.ts';
import ResponseInterceptor from '~/application/interceptors/response.interceptor.ts';
import RequestInterceptor from '~/application/interceptors/request.interceptor.ts';
import UserModule from '~/user/modules/user.module.ts';
import ValidatorModule from '~/validator/modules/ValidatorModule.ts';
import MigratorModule from '~/migrator/modules/migrator.module.ts';

@Module({
  modules: [
    MigratorModule,
    UserModule,
    LoggerModule, 
    ValidatorModule
  ],
  interceptors: [
    RequestInterceptor,
    RouterInterceptor, 
    ResponseInterceptor,
    ExceptionInterceptor,
  ],
})
export class AppModule {
  constructor() {}
}

export default AppModule

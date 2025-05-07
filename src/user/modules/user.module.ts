import { Module } from '@zxxxro/anemics';
import { UserFilterModel } from '~/user/models/user-filter.model.ts';
import UserService from '~/user/services/user.service.ts';
import UserController from '~/user/controllers/user.controller.ts';

@Module({
  models: [
    UserFilterModel,
  ],
  providers: [
    UserService,
  ],
  controllers: [
    UserController
  ]
})
export class UserModule {
  constructor() { }
}

export default UserModule
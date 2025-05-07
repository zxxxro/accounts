import { ContextType, Controller, Get } from '@zxxxro/anemics';
import { UserServiceInterface } from '~/user/interfaces.ts';
import { UserFilterModel } from '~/user/models/user-filter.model.ts';
import { UserType } from '~/user/types.ts';

@Controller('user')
export class UserController {
  constructor(public userService: UserServiceInterface) {}

  @Get()
  async getUsers<T>(userFilterModel: UserFilterModel, context: ContextType<T>): Promise<Array<UserType>> {
    return this.userService.getUserList()
  }

  @Get()
  async postUser(): Promise<UserType> {
    return this.userService.getUser()
  }
}

export default UserController
import { UserServiceInterface } from '~/user/interfaces.ts';
import { UserType } from '~/user/types.ts';

export class UserService implements UserServiceInterface {

  constructor() {
    console.log('userService')
  }

  async getUserList(): Promise<Array<UserType>> {
    return [{ firstName: 'Eduardo', lastName: 'Segura' }];
  }

  async getUser(): Promise<UserType> {
    return { firstName: 'Eduardo', lastName: 'Segura' };
  }
}

export default UserService
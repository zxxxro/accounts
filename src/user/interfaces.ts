import { UserType } from '~/user/types.ts';

export interface UserServiceInterface {
  getUserList(): Promise<Array<UserType>>
  getUser(): Promise<UserType>
}
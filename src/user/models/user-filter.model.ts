import { Required, Integer } from '@zxxxro/commons'
import { Model } from '@zxxxro/anemics';

@Model()
export class UserFilterModel {
  @Integer()
  @Required()
  firstName!: number
  lastName!: string
}
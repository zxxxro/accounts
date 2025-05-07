import { MigrationInterface } from '~/migrator/interfaces.ts';
import Migration from '~/migrator/annotations/migration.annotation.ts';

@Migration()
export class MigrationCreateDb2025032201 implements MigrationInterface {
  async up(): Promise<void> {
    console.log("CREATED DB")
  }
  async down(): Promise<void> {
    console.log("DESTROY DB")
  }
}

export default MigrationCreateDb2025032201
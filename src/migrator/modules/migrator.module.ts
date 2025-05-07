import type { ModuleInterface } from '@zxxxro/anemics';

import { Container } from '@zxxxro/commons';
import { Module } from '@zxxxro/anemics';
import { Migration } from '~/migrator/annotations/migration.annotation.ts';
import MigrationCreateDb2025032201 from '~/migrator/migrations/2025032201-createdb.migration.ts';

@Module({
  any: [
    MigrationCreateDb2025032201
  ]
})
export class MigratorModule implements ModuleInterface {
  constructor() {}

  async onUpdate(): Promise<void> {
    const migrations = Container.artifactsByTag.get(Migration.tag)

    console.log('UAT', migrations)
  }
}

export default MigratorModule

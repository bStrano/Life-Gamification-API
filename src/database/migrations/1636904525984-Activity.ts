import { MigrationInterface, QueryRunner } from 'typeorm';

export class Activity1636904525984 implements MigrationInterface {
  name = 'Activity1636904525984';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "activity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "points" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "activity"`);
  }
}

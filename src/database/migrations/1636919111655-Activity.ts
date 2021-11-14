import { MigrationInterface, QueryRunner } from 'typeorm';

export class Activity1636919111655 implements MigrationInterface {
  name = 'Activity1636919111655';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "activity" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "points" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "activity"`);
  }
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class Boards1722792890526 implements MigrationInterface {
    name = 'Boards1722792890526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Boards" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_5be7b56e2c14342b973e2569668" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Boards" ADD CONSTRAINT "FK_6a64a03c61ba414fed68f302a85" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Boards" DROP CONSTRAINT "FK_6a64a03c61ba414fed68f302a85"`);
        await queryRunner.query(`DROP TABLE "Boards"`);
    }

}

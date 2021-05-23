import {MigrationInterface, QueryRunner} from "typeorm";

export class MIGRATION1621741514125 implements MigrationInterface {
    name = 'MIGRATION1621741514125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "nome" character varying(100) NOT NULL, "celular" character varying(13) NOT NULL, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class MIGRATION1621741524081 implements MigrationInterface {
    name = 'MIGRATION1621741524081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `contacts` (`id` int NOT NULL AUTO_INCREMENT, `nome` varchar(200) NOT NULL, `celular` varchar(20) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `contacts`");
    }

}

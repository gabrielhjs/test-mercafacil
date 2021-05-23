import {MigrationInterface, QueryRunner} from "typeorm";

export class MIGRATION1621740124974 implements MigrationInterface {
    name = 'MIGRATION1621740124974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `orm_macapa` (`id` int NOT NULL AUTO_INCREMENT, `nome` varchar(200) NOT NULL, `celular` varchar(20) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `orm_macapa`");
    }

}

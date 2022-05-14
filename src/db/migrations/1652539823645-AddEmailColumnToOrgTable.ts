import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEmailColumnToOrgTable1652539823645 implements MigrationInterface {
    name = 'AddEmailColumnToOrgTable1652539823645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "org" ADD "email" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "org" ADD CONSTRAINT "UQ_938f8e1dcc188659ce38ba66ef0" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "org" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "org" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "org" ADD "name" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "org" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "org" ADD "name" character varying(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "org" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "org" DROP CONSTRAINT "UQ_938f8e1dcc188659ce38ba66ef0"`);
        await queryRunner.query(`ALTER TABLE "org" DROP COLUMN "email"`);
    }

}

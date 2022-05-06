import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateOrgTable1651804059055 implements MigrationInterface {
    name = 'CreateOrgTable1651804059055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "org" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "description" text NOT NULL, "subscriptionEndDate" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_703783130f152a752cadf7aa751" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "org"`);
    }

}

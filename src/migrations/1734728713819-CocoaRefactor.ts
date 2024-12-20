import { MigrationInterface, QueryRunner } from "typeorm";

export class CocoaRefactor1734728713819 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "cocoa" RENAME COLUMN "name" TO "title"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "cocoa" RENAME COLUMN "title" TO "name"
        `);
    }
}

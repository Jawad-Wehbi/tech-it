/*
  Warnings:

  - You are about to drop the column `is_correct` on the `mcq_answers` table. All the data in the column will be lost.
  - You are about to drop the column `mcq_answer` on the `mcq_answers` table. All the data in the column will be lost.
  - Added the required column `correct_answer4` to the `mcq_answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mcq_answer1` to the `mcq_answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mcq_answer2` to the `mcq_answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mcq_answer3` to the `mcq_answers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mcq_answers` DROP COLUMN `is_correct`,
    DROP COLUMN `mcq_answer`,
    ADD COLUMN `correct_answer4` VARCHAR(200) NOT NULL,
    ADD COLUMN `mcq_answer1` VARCHAR(200) NOT NULL,
    ADD COLUMN `mcq_answer2` VARCHAR(200) NOT NULL,
    ADD COLUMN `mcq_answer3` VARCHAR(200) NOT NULL;

-- RenameIndex
ALTER TABLE `users` RENAME INDEX `users_email_key` TO `Users_email_key`;

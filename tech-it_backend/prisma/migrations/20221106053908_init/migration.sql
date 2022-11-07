-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_type` ENUM('COMPANY', 'ASSIGNEE') NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `companies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_logo` VARCHAR(255) NOT NULL,
    `employees_number` VARCHAR(255) NOT NULL,
    `company_brief` VARCHAR(500) NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `companies_id_key`(`id`),
    UNIQUE INDEX `companies_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assignees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `position` VARCHAR(255) NOT NULL,
    `assignee_type` ENUM('EMPLOYEE', 'APPLICANT') NOT NULL,
    `user_id` INTEGER NOT NULL,
    `company_id` INTEGER NOT NULL,

    UNIQUE INDEX `assignees_id_key`(`id`),
    UNIQUE INDEX `assignees_user_id_key`(`user_id`),
    UNIQUE INDEX `assignees_company_id_key`(`company_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `topic` ENUM('PYTHON', 'JAVA', 'DATABASES', 'ALGORITHMS', 'DATA_STRUCTURE', 'JAVASCRIPT', 'C_SHARP', 'RUBY', 'C', 'SQL', 'PHP', 'COMPANY_TESTS') NOT NULL,
    `test_title` VARCHAR(255) NOT NULL,
    `test_details` VARCHAR(500) NOT NULL,

    UNIQUE INDEX `tests_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `companies_tests` (
    `test_id` INTEGER NOT NULL,
    `company_id` INTEGER NOT NULL,

    UNIQUE INDEX `companies_tests_test_id_key`(`test_id`),
    UNIQUE INDEX `companies_tests_company_id_key`(`company_id`),
    PRIMARY KEY (`test_id`, `company_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tests_assignees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `test_id` INTEGER NOT NULL,
    `assignee_id` INTEGER NOT NULL,

    UNIQUE INDEX `tests_assignees_id_key`(`id`),
    UNIQUE INDEX `tests_assignees_test_id_key`(`test_id`),
    UNIQUE INDEX `tests_assignees_assignee_id_key`(`assignee_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question_title` VARCHAR(255) NOT NULL,
    `max_score` VARCHAR(255) NOT NULL,
    `customized` BOOLEAN NOT NULL DEFAULT false,
    `question_details` VARCHAR(500) NOT NULL,
    `topic` ENUM('PYTHON', 'JAVA', 'DATABASES', 'ALGORITHMS', 'DATA_STRUCTURE', 'JAVASCRIPT', 'C_SHARP', 'RUBY', 'C', 'SQL', 'PHP', 'COMPANY_TESTS') NOT NULL,

    UNIQUE INDEX `questions_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assignee_answers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `score` VARCHAR(255) NOT NULL,
    `question_id` INTEGER NOT NULL,
    `tests_assignees_id` INTEGER NOT NULL,

    UNIQUE INDEX `assignee_answers_id_key`(`id`),
    UNIQUE INDEX `assignee_answers_question_id_key`(`question_id`),
    UNIQUE INDEX `assignee_answers_tests_assignees_id_key`(`tests_assignees_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coding_assignee_answers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code_body` VARCHAR(255) NOT NULL,
    `output` VARCHAR(500) NOT NULL,
    `assignee_answer_id` INTEGER NOT NULL,

    UNIQUE INDEX `coding_assignee_answers_id_key`(`id`),
    UNIQUE INDEX `coding_assignee_answers_assignee_answer_id_key`(`assignee_answer_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mcq_selected_choices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `selected_choice` VARCHAR(255) NOT NULL,
    `output` VARCHAR(500) NOT NULL,
    `assignee_answer_id` INTEGER NOT NULL,

    UNIQUE INDEX `mcq_selected_choices_id_key`(`id`),
    UNIQUE INDEX `mcq_selected_choices_assignee_answer_id_key`(`assignee_answer_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tests_questions` (
    `test_id` INTEGER NOT NULL,
    `question_id` INTEGER NOT NULL,

    UNIQUE INDEX `tests_questions_test_id_key`(`test_id`),
    UNIQUE INDEX `tests_questions_question_id_key`(`question_id`),
    PRIMARY KEY (`test_id`, `question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coding_answers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coding_answer` VARCHAR(2000) NOT NULL,
    `question_id` INTEGER NOT NULL,

    UNIQUE INDEX `coding_answers_id_key`(`id`),
    UNIQUE INDEX `coding_answers_question_id_key`(`question_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mcq_answers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mcq_answer` VARCHAR(2000) NOT NULL,
    `is_correct` BOOLEAN NOT NULL DEFAULT false,
    `question_id` INTEGER NOT NULL,

    UNIQUE INDEX `mcq_answers_id_key`(`id`),
    UNIQUE INDEX `mcq_answers_question_id_key`(`question_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `companies` ADD CONSTRAINT `companies_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignees` ADD CONSTRAINT `assignees_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignees` ADD CONSTRAINT `assignees_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `companies_tests` ADD CONSTRAINT `companies_tests_test_id_fkey` FOREIGN KEY (`test_id`) REFERENCES `tests`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `companies_tests` ADD CONSTRAINT `companies_tests_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tests_assignees` ADD CONSTRAINT `tests_assignees_test_id_fkey` FOREIGN KEY (`test_id`) REFERENCES `tests`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tests_assignees` ADD CONSTRAINT `tests_assignees_assignee_id_fkey` FOREIGN KEY (`assignee_id`) REFERENCES `assignees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignee_answers` ADD CONSTRAINT `assignee_answers_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignee_answers` ADD CONSTRAINT `assignee_answers_tests_assignees_id_fkey` FOREIGN KEY (`tests_assignees_id`) REFERENCES `tests_assignees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `coding_assignee_answers` ADD CONSTRAINT `coding_assignee_answers_assignee_answer_id_fkey` FOREIGN KEY (`assignee_answer_id`) REFERENCES `assignee_answers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mcq_selected_choices` ADD CONSTRAINT `mcq_selected_choices_assignee_answer_id_fkey` FOREIGN KEY (`assignee_answer_id`) REFERENCES `assignee_answers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tests_questions` ADD CONSTRAINT `tests_questions_test_id_fkey` FOREIGN KEY (`test_id`) REFERENCES `tests`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tests_questions` ADD CONSTRAINT `tests_questions_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `coding_answers` ADD CONSTRAINT `coding_answers_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mcq_answers` ADD CONSTRAINT `mcq_answers_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

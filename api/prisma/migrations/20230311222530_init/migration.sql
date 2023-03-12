/*
  Warnings:

  - You are about to drop the column `examId` on the `Question` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_examId_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "examId";

-- CreateTable
CREATE TABLE "QuestionExam" (
    "questionId" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuestionExam_pkey" PRIMARY KEY ("questionId","examId")
);

-- AddForeignKey
ALTER TABLE "QuestionExam" ADD CONSTRAINT "QuestionExam_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionExam" ADD CONSTRAINT "QuestionExam_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

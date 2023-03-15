-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "teacherId" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

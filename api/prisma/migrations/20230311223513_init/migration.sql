/*
  Warnings:

  - A unique constraint covering the columns `[content]` on the table `Question` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Question_content_key" ON "Question"("content");

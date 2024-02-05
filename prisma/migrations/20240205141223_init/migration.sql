/*
  Warnings:

  - A unique constraint covering the columns `[lastSeen]` on the table `Invoice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Invoice_lastSeen_key" ON "Invoice"("lastSeen");

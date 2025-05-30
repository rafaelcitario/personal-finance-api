/*
  Warnings:

  - You are about to drop the column `valor` on the `incomes` table. All the data in the column will be lost.
  - Added the required column `amount` to the `incomes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "incomes" DROP COLUMN "valor",
ADD COLUMN     "amount" DECIMAL(19,4) NOT NULL;

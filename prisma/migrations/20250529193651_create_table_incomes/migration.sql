-- CreateEnum
CREATE TYPE "IncomeTypes" AS ENUM ('PAYCHECK', 'INTEREST', 'REFUND', 'GIFT');

-- CreateTable
CREATE TABLE "incomes" (
    "_id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "type" "IncomeTypes" NOT NULL,
    "valor" DECIMAL(19,4) NOT NULL,
    "description" TEXT NOT NULL,
    "users_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "incomes_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "incomes__id_key" ON "incomes"("_id");

-- CreateIndex
CREATE INDEX "incomes__id_users_id_idx" ON "incomes"("_id", "users_id");

-- CreateIndex
CREATE INDEX "refresh_tokens__id_users_id_idx" ON "refresh_tokens"("_id", "users_id");

-- AddForeignKey
ALTER TABLE "incomes" ADD CONSTRAINT "incomes_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

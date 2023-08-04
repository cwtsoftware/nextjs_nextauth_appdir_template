/*
  Warnings:

  - The `emailVerified` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
DROP COLUMN "emailVerified",
ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false;
